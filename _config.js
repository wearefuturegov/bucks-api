// Non-secret config goes here...

module.exports = {
    // Templates for GOV.UK Notify
    notifyEmailTemplate: "1dbf18a5-4080-4ce4-a210-8e67dd75d47a",
    notifySmsTemplate: "d8a965d4-efc1-451c-a9b1-2101ab67efbd",
    // Options for forms and filters
    interestsOptions: [
        {
            value: "active",
            label: "Staying active"
        },
        {
            value: "social",
            label: "Socialising"
        },
        {
            value: "support",
            label: "Support with daily tasks"
        },
        {
            value: "learning",
            label: "Learning new things"
        },
        {
            value: "cultural",
            label: "Culture and visiting new places"
        }
    ],
    supportOptions: [
        {
            value: "caring",
            label: "Caring for someone else"
        },
        {
            value: "transport",
            label: "Getting out and about"
        },
        {
            value: "housework",
            label: "Housework"
        },
        {
            value: "meals",
            label: "Meals and nutrition"
        },
        {
            value: "equipment",
            label: "Equipment and safety at home"
        },
        {
            value: "hygiene",
            label: "Personal hygiene and incontinence"
        },
        {
            value: "money",
            label: "Paying for things"
        },
    ],
    daysOptions: [
        {
            value: "monday",
            label: "Monday"
        },
        {
            value: "tuesday",
            label: "Tuesday"
        },
        {
            value: "wednesday",
            label: "Wednesday"
        },
        {
            value: "thursday",
            label: "Thursday"
        },
        {
            value: "friday",
            label: "Friday"
        },
        {
            value: "saturday",
            label: "Saturday"
        },
        {
            value: "sunday",
            label: "Sunday"
        }
    ],
    ageOptions: [
        {
            value: "young people",
            label: "Young people"
        },{
            value: "young adults",
            label: "Young adults"
        },{
            value: "older adults",
            label: "Older adults"
        }
    ],
    accessibilityOptions: [
        {
            value: "nearby bus stop",
            label: "Nearby bus stop"
        },{
            value: "on-site parking",
            label: "On-site parking"
        },{
            value: "wc wheelchair access",
            label: "Wheelchair-accessible bathroom"
        },    {
            value: "building lift",
            label: "Building has lift"
        },{
            value: "hearing induction loop",
            label: "Hearing induction loop"
        },{
            value: "building wheelchair access",
            label: "Building has wheelchair access"
        }
    ]
}
