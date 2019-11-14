require 'mongo'
require 'byebug'

Mongo::Logger.logger.level = ::Logger::FATAL

#client = Mongo::Client.new([ 'HOST-1', 'HOST-2' ], :database => 'DB_NAME', :user => 'DB_USER', :password => 'DB_PASSWORD', replica_set: REPLICA_SET, retry_writes: false) # Connect to a remote DB - set credentials as appropriate
client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'bucks_care_local') # Connect to local DB

collection = client[:services]

upper_case_total = 0
duplicates_total = 0
updated_services = 0

collection.find.each do |doc|

  if doc[:suitability].map{|item| item.match?(/[[:upper:]]/) }.include?(true)
    had_upper_case = true
    upper_case_total += 1
  end

  lower_case_suitability = doc[:suitability].map { |suit| suit.downcase }

  if lower_case_suitability.uniq.length != lower_case_suitability.length
    had_duplicates = true
    duplicates_total += 1
  end

  unique_suitability = lower_case_suitability.uniq

  if had_upper_case || had_duplicates
    puts "------------------------"
    #result = collection.update_one( { '_id' => doc[:_id] }, { '$set' => { 'suitability' => unique_suitability } } ) # Update DB - uncoment when ready
    updated_services += 1
    puts "Replacing (#{doc[:suitability].size}) #{doc[:suitability]} with (#{unique_suitability.size}) #{unique_suitability}"
  end
end

puts "------------------------"
puts "#{client[:services].find.count} services in total"
puts "#{upper_case_total} services with uppercase"
puts "#{duplicates_total} services with duplicates"
puts "#{updated_services} services were updated"

client.close