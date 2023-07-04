export const metadata = {
    title: "Article",
};
import Link from "next/link";

export default function ProjectPage() {
    const awsLine = `psql --host=xxx.comxxxx --port=5432 --username=postgres --password --dbname=xxx`;
    const psqlLine = `CREATE TABLE blog ( 
    article_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    article_date DATE DEFAULT CURRENT_TIMESTAMP,
    article_image_small VARCHAR(300),
    article_image VARCHAR(300), article_title VARCHAR(100),
    article_post TEXT, article_public BOOLEAN 
);`;

    return (
        <main className="project-container">
            <div className="project-container-body">
                <h2>Implementation</h2>
                <p>
                    This is full-stack website built using Next 13 and deployed
                    on Vercel server. I have created my own API and also use
                    external third party APIs. The database server I use to save
                    and store my data is AWS RDS Postgres. Furthermore, there is
                    Google Analytics tracking which is helpful for me to gauge
                    audience views.
                </p>
                <h2>Design</h2>
                <p>
                    The design approach I used is mobile friendly. I code
                    everything with the intention of mobile-view. Then, I would
                    add the viewports and set min-width to adjust the content
                    view from tablets and desktops. It is important because the
                    majority percentage of news/articles/blog readers come from
                    mobile devices. The tools I used to make this happen is SCSS
                    and Material UI. I like the color design of MUI which is why
                    I chose that. SCSS is a game changer because I can reuse
                    styles easily and put them in variables, which is something
                    not possible in regular CSS. It saves time.
                </p>
                <h2>API</h2>
                <ol>
                    <li>Custom API</li>
                    <li>External API</li>
                </ol>

                <h3>1. Custom API</h3>
                <p>
                    I built my own API and wrote my own custom logic for
                    creating, reading, updating content. The API is hosted here
                    on this domain and the different routes can be found here:{" "}
                    <Link
                        href="https://github.com/BestVersion7/trainingnext13/tree/main/app/api.
"
                    >
                        https://github.com/BestVersion7/trainingnext13/tree/main/app/api.
                    </Link>{" "}
                    I decided to go with this approach rather than having the
                    API logic on the same domain is to take advantage of the
                    next 13 features of caching. Plus separating the front end
                    and back end code makes it easier for me to focus on
                    security. I have added middleware on the api that disallows
                    access to routes unless there is an authorization header.
                    For example, creating a new article or a new post.
                </p>
                <h3>2. External APIs</h3>
                <ol>
                    <li>SendGrid</li>
                    <li>GoogleMaps</li>
                    <li>Stripe</li>
                    <li>Cloudinary</li>
                </ol>
                <p>
                    SendGrid helps me with emails and creating subscribers. When
                    a user subscribes, I add them to a marketing list which is
                    saved in the SendGrid database and I can send an email to
                    all the subscribers on the list. Furthermore, on the contact
                    page, when a user sends me a message, I would receive it on
                    my email. It pairs well with nodemailer.
                </p>
                <p>
                    The GoogleMaps API is also on my contact page. This is an
                    important element to any website and shows where you are
                    located.
                </p>
                <p>
                    Third, I set up an account on stripe.com. It is a payment
                    integration API that allows me to receive donations on the
                    /support page. It is another important feature to have on a
                    blog for sponsors.
                </p>
                <p>
                    Lastly, I use cloudinary to save all my pictures and videos.
                    Cloudinary provides CDN for faster caching than saving it in
                    my local machine. Plus, they offer free limit every month
                    for image transformation such as sizing, cropping, etc.
                </p>
                <h2>Dashboard</h2>
                <p>
                    Since my website is built from scratch and using my own
                    database, it is critical to have a management system to be
                    able to perform basic CRUD operations. I built a dashboard
                    that allows me to do just that. On{" "}
                    <Link href="https://www.speedruntravel.com/dashboard">
                        https://www.speedruntravel.com/dashboard
                    </Link>
                    , you can see all my public and private articles and reels
                    and this content is not cached and run every time. On this
                    page, I am able to perform the basic CRUD operation. When
                    clicking on the "create" or "update" buttons, it does not
                    make an api call to "post" or "put" because it is a public
                    route and just for demo. Normally, I would have a middleware
                    file to check for authentication for <b>/dashboard</b> but I
                    wanted to share it so made it public and disabled the
                    features. The articles are written using markdown format and
                    the package react-markdown is helpful for that.
                </p>
                <h2>Database And Storage</h2>
                <p>
                    The database I use to store the database is in AWS RDS
                    Postgres. I decided to use Postgres because SQL is easier to
                    manipulate as the quantity of data increases. It's easier to
                    make one change on a related table rather than make change
                    on every JSON object for MongoDB. I went with AWS because it
                    is the leader for Saas and I wanted to learn more about it,
                    not just RDS. They also have Docker, EC2 which I have
                    previously used to deploy my API but I went with Vercel
                    because it is expensive to use these features and not part
                    of the free trial. I use prisma to make the integration to
                    Postgres. It saves me time writing SQL code and has own
                    visual server (prisma studio) that I can use to see the
                    different tables and make edits. However, when I create a
                    table I would command line into the AWS RDS. For example
                </p>
                <pre>{awsLine}</pre>
                <pre>{psqlLine}</pre>

                <h2>Tools:</h2>
                <p>
                    The code editor I use to write my code is Visual Studio
                    Code. It is the most popular visual environment. The
                    versioning software I use is Git. I decided to make
                    everything public to share what I have learned coding.
                    Previously, the code was in a private repo.
                </p>
                <h2>Additional:</h2>
                <p>
                    I use Google Analytics for tracking. It is important to be
                    able to see views, bounce rates, popular links, etc. Also,
                    keeping an audience is important for monetizing in the
                    future (optional) on GoogleAds. My site was rejected twice
                    because there is not enough content. :)
                </p>
            </div>
        </main>
    );
}
