
module.exports = services => `
<html>
    <style>
        *{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            font-size: 0.5em;
        }
        h1, h2{
            margin-bottom: 10px;
        }
        .intro{
            margin-bottom: 15px;
        }
        ol{
            list-style: none;
        }
        li{
            border: 2px solid black;
            padding: 15px;
            margin-bottom: 15px;
        }
        h3{
            margin-top: 15px;
            margin-bottom: 5px;
        }
        .category{
            background: black;
            color: white;
            padding: 2px 5px;
            font-weight: bold;
            text-transform: capitalize;
            font-size: 0.9rem;
        }
    </style>
    <h1>Your services</h1>
    <p class="intro">See more at <u>directory.buckscc.gov.uk</u></p>
    <ol>
        ${services.map(service=>`
            <li>
                <h2>${service.name || service.parentOrganisation} <span class="category">${service.category}</span></h2>
                <p>${service.description}</p>

                <h3>Where</h3>
                ${service.venue ? `<p>${service.venue}</p>` : ""}
                ${service.area ? `<p>${service.area}</p>` : ""}
                ${service.postcode ? `<p>${service.postcode}</p>` : ""}

                <h3>When</h3>
                ${service.frequency ? `<p>${service.frequency}</p>` : ""}

                <h3>Contact</h3>
                ${service.contactName ? `<p><strong>${service.contactName}</strong></p>` : ""}
                ${service.url ? `<p><u>${service.url}</u></p>` : ""}
                ${service.phone ? `<p>${service.phone}</p>` : ""}
                ${service.email ? `<p>${service.email}</p>` : ""}
            </li>
        `).join('')}
    </ol>
    <h2>Important information</h2>
    <p>We regularly check and update these community services, but can’t guarantee that they will always be accurate.</p>
    <p>You may need a referral for some activities and groups. Contact the organiser if unsure.</p>
</html>
`
