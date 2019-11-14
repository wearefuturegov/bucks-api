# Coordinates are stored in reverse order in DB.
# So coordinates[0] should be longitude and coordinates[1] should be latitude

# eg.
# coordinates:
#   0: -0.554227
#   1: 51.587065

require 'mongo'

Mongo::Logger.logger.level = ::Logger::FATAL

#client = Mongo::Client.new([ HOST ], :database => DB_NAME, :user => DB_USER, :password => DB_PASSWORD) # Connect to a remote DB - set credentials as appropriate
client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'bucks_care_local') # Connect to local DB

collection = client[:services]

total_wrong = 0
total_without_geo = 0
updated_services = 0

collection.find.each do |doc|
  if geo = doc[:geo]
    coordinates = geo[:coordinates]
    long = coordinates[0]
    lat = coordinates[1]

    if long > lat
      puts "Incorrect - #{doc[:_id]} latitude should be greater than longitude!"
      total_wrong += 1

      long = coordinates[1]
      lat = coordinates[0]

      # result = collection.update_one( { '_id' => doc[:_id] }, { '$set' => { 'geo.coordinates' => [long, lat] } } ) # Update DB, uncomment when confident
      # puts "Updated #{result.modified_count} service #{doc[:name]} with coordinates #{[long, lat]}"
      updated_services += 1
    end
  else
    total_without_geo += 1
  end
end

puts "------------------------"
puts "#{client[:services].find.count} services in total"
puts "#{total_wrong} incorrect services"
puts "#{total_without_geo} services without geo"
puts "#{updated_services} services were updated"

client.close