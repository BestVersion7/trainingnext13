export const webProjects = [
    {
        title: "Doctor Booking Website",
        url_link: "https://cooperpricehealth.vercel.app/",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1690916823/3105%20portfolio%20screenshots/cooper.png",
        description:
            "The goal of this website is to inform users about mental health and allow them to book an appointment with a therapist. It is a full stack website that allows users to book an appointment with a therapist. I added a default test account to use to book the appointment. Once a date and time is booked, the availability on the calendar updates and is no longer available. I am using react-calendar to make the view easier and all the data is stored on RDS. The api is stored on this domain /api/booking. Lastly, I used Bootstrap for styling the buttons.",
        technologiesUsed:
            "Typescript>90%, Nextjs, AWS RDS (Postgres), OAuth 2.0, Stripe, SendGrid, Zoho Mail, Cloudinary, Bootstrap, SCSS, Git",
        gitHubLink: "https://github.com/BestVersion7/cooperpricehealth",
    },

    {
        title: "Travel Blog",
        url_link: "https://speedruntravel.com",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1654139992/3105%20portfolio%20screenshots/speedtravel.png",
        description:
            "The goal of this website is to share my travel adventures. It is a custom built CMS with an admin page that I can use to edit articles/photos. Users can post comments once signed in with Google. The article, user, comment data are stored to AWS RDS. For photo storage, I am using Cloudinary which caches photos for faster delivery. For newsletter subscription, I have incorporated SendGrid which automates the sending out emails. All the emails are sent out from info@speedruntravel.com which I created on Zoho mail. Furthermore, I created a support page and integrated Stripe to handle payments.",
        technologiesUsed:
            "Typescript>90%, Nextjs, AWS RDS (Postgres), OAuth 2.0, Stripe, SendGrid, Zoho Mail, Google Analytics, Adsense, Cloudinary, Prisma, Material UI, SCSS, Git",
        gitHubLink: "https://github.com/BestVersion7/speedruntravel",
    },

    {
        title: "Drink Recipe Blog (Updated)",
        url_link: "https://winestore.vercel.app/",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",
        description:
            "The goal of this website is to share drink recipes. Users can sign in using Google, Github or email and post comments to the recipes. The authentication part is handled by third-party next-auth package. In the previous version (https://goldenwine.herokuapp.com/), the authentication was written by myself but Auth2.0 is better in terms of security and users generally don't like to create new accounts. Furthermore, it is deployed to Vercel which results in better performance removing the cold starts from Heroku free tier.",
        technologiesUsed:
            "Nextjs, AWS RDS (Postgres), OAuth 2.0, Cloudinary, Prisma, SCSS, Git",
        gitHubLink: "https://github.com/BestVersion7/winestore",
    },
    // {
    //     title: "Drink Recipe Blog (Outdated)",
    //     url_link: "https://goldenwine.herokuapp.com/",
    //     url_image:
    //         "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",
    //     description:
    //         "This is a full stack website deployed on Heroku. The goal of this website is to find recipes for alcoholic beverages and post reviews on the recipe. Reviews can only be posted once users sign in or create a new account. I have also incorporated Cloudinary CDN to submit profile images and transformations. All the data is stored on MongoDB Atlas.",
    //     technologiesUsed:
    //         "React, MongoDB, ExpressJs, Heroku, Google Analytics, Git",
    //     gitHubLink: "https://github.com/BestVersion7/heroku-site",
    // },
    {
        title: "My Website",
        url_link: "https://hunterkf.com",
        url_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1654140524/3105%20portfolio%20screenshots/mysite.png",
        description:
            "This my personal website. It is a full stack site rewritten in 2023 to use Next 13.js (previously Next12) server side rendering for better SEO. It is also hosting an api that I use for my blog. The API gives access to my blog for performing CRUD operations for creating/updating articles, reels, comments, etc.",
        // "This is a full stack website deployed on Heroku. The goal of this website is for me to write and share articles with you. I have created my own API: REST for user authentication, and SOCKET.io for live comments. I also have a master/admin page running on web sockets for me to publish, update, delete articles real time. All the data is stored on PostgreSQL.",
        technologiesUsed:
            "Nextjs, Typescript<5%, AWS RDS (Postgres), OAuth 2.0, Cloudinary, Prisma, SCSS, Git",
        gitHubLink: "https://github.com/BestVersion7/trainingnext13",
    },
];
