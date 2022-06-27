import img1 from './assets/images/s1.png';
import img2 from './assets/images/s2.png';
import img3 from './assets/images/s3.png';
import img4 from './assets/images/s4.png';
import img5 from './assets/images/s5.png';
import img6 from './assets/images/s6.png';
import banner from './assets/images/web_dev.webp';

const logotext = "Dennis.Y";
const meta = {
    title: "Dennis.Y",
    description: "I’m Dennis Yun - Senior Web developer, currently working remotely",
};

const introdata = {
    title: "I’m Dennis Yun",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop web apps",
    },
    description: "Innovative, task-driven professional with 8+ years of experience in web design and development across diverse industries." +  
                 "nEquipped with a recode of success in consistently identifying and providing the technological needs of companies through ingenious innovation."+
                 "Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback.",
    your_img_url: banner,
};

const dataabout = {
    title: "What is my goal",
    aboutme: "What is important to me is always meeting the needs of the other party and taking responsibility for the project from launch to success. Code quality is the heart of a developer. At the end of each work day, I like receiving feedback from client at regular intervals.",
};
const worktimeline = [{
        jobtitle: "Weekdays",
        where: "Remote",
        date: "09:00' ~ 17:00'",
    },
    {
        jobtitle: "Interview",
        where: "Video call",
        date: "Every 18:00' except weekend",
    },
    {
        jobtitle: "Beak days",
        where: "holiday & Weekend",
        date: "No working",
    },
];

const skills = [
    {
        name: "PHP",
        value: 100,
    },
    {
        name: "JavaScript",
        value: 100,
    },
    {
        name: "TypeScript",
        value: 100,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "Angular",
        value: 100,
    },
    {
        name: "Jquery",
        value: 100,
    },
    {
        name: "Vue.js",
        value: 100,
    },
    {
        name: "Python",
        value: 95,
    },
    {
        name: "Djano",
        value: 95,
    },
    {
        name: "Laravel",
        value: 95,
    },
    {
        name: "Shopify",
        value: 95,
    },
    {
        name: "MySQL",
        value: 95,
    },
    {
        name: "PostgreSQL",
        value: 95,
    },
    {
        name: "Github",
        value: 100,
    },
    {
        name: "Jirra",
        value: 100,
    },
    {
        name: "Trello",
        value: 100,
    },
    
];

const services = [{
        title: "UI & UX Design",
        description: "I can provide creative UI/UX design.",
    },
    {
        title: "Web app",
        description: "Can develop perfect web application every on time you want.",
    },
    {
        title: "E-Commerce marketplace",
        description: "Multi fuctional marketpalce can be developed with senior business logic and best quality of code.",
    },
];

const dataportfolio = [{
        img: img1,
        desctiption: "Spots TV site (Vue.js / Nuxt.js / Node.js / Amazon webservice / Ngnix)",
        link: "https://www.sporttv.pt/",
    },
    {
        img: img2,
        desctiption: "Japanese Cosmetic Business potal (React / Core.js / Amazon webservice)",
        link: "https://corp.shiseido.com/report/en/2021/",
    },
    {
        img: img3,
        desctiption: "Adachi - Online Restaurant (Wordpress / JQuery / MySQL / Flywheel / Google Analytics)",
        link: "https://adachirestaurant.com/gallery/",
    },
    {
        img: img4,
        desctiption: "Swedish Scooter & Byke market (Shopify)",
        link: "https://eltrastore.se/",
    },
    {
        img: img5,
        desctiption: "Hotel CRM (Wordpress / Vue.js / MySQL / MailChimp)",
        link: "https://www.theviewfromtheshard.com/",
    },
    {
        img: img6,
        desctiption: "Czech Flight booking service (Angular 8 / Node.js / Express.js / Hammer.js)",
        link: "https://www.letuska.cz/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "hello.dennis0102@gmail.com",
    YOUR_FONE: "+1 905-282-6789",
    description: "You can send at any time you want at work days",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Red199612",
    // facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    // twitter: "https://twitter.com",
    // youtube: "https://youtube.com",
    // twitch: "https://twitch.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};