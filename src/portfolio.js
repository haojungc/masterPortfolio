/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hao-Jung's Portfolio",
  description:
    "A passionate computer science student who is experienced in Web Development and Cloud Computing Services and enjoys developing end-to-end solutions to make people's lives more convenient.",
  og: {
    title: "Hao-Jung Chen Portfolio",
    type: "website",
    url: "https://github.com/haojungc",
  },
};

//Home Page
const greeting = {
  title: "Hao-Jung (Nick) Chen",
  logo_name: "Nick Chen",
  nickname: "haojungc",
  subTitle:
    "A passionate computer science student who is experienced in Web Development and Cloud Computing Services and enjoys developing end-to-end solutions to make people's lives more convenient.",
  resumeLink: "https://haojungc.s3.amazonaws.com/Hao-Jung-Chen-resume.pdf",
  portfolio_repository: "https://github.com/haojungc/masterPortfolio",
  githubProfile: "https://github.com/haojungc",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/haojungc",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/haojungc/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  //{
  //name: "YouTube",
  //link: "https://youtube.com/c/DevSense19",
  //fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  //},
  {
    name: "Gmail",
    link: "mailto:haojungc@usc.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  //{
  //name: "Twitter",
  //link: "https://twitter.com/ashutosh_1919",
  //fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  //},
  //{
  //name: "Facebook",
  //link: "https://www.facebook.com/laymanbrother.19/",
  //fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  //},
  //{
  //name: "Instagram",
  //link: "https://www.instagram.com/layman_brother/",
  //fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  //},
];

const skills = {
  data: [
    //{
    //title: "Data Science & AI",
    //fileName: "DataScienceImg",
    //skills: [
    //"⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //"⚡ Experience of working with Computer Vision and NLP projects",
    //"⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //],
    //softwareSkills: [
    //{
    //skillName: "Tensorflow",
    //fontAwesomeClassname: "logos-tensorflow",
    //style: {
    //backgroundColor: "transparent",
    //},
    //},
    //{
    //skillName: "Keras",
    //fontAwesomeClassname: "simple-icons:keras",
    //style: {
    //backgroundColor: "white",
    //color: "#D00000",
    //},
    //},
    //{
    //skillName: "PyTorch",
    //fontAwesomeClassname: "logos-pytorch",
    //style: {
    //backgroundColor: "transparent",
    //},
    //},
    //{
    //skillName: "Python",
    //fontAwesomeClassname: "ion-logo-python",
    //style: {
    //backgroundColor: "transparent",
    //color: "#3776AB",
    //},
    //},
    //{
    //skillName: "Deeplearning",
    //imageSrc: "deeplearning_ai_logo.png",
    //},
    //],
    //},
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Creating application backend in node.js, Express & Flask",
        "⚡ Developing android apps using Android Studio (Java)",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#b52e31",
          },
        },
        {
          skillName: "node.js",
          fontAwesomeClassname: "devicon:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      //fileName: "CloudInfraImg",
      fileName: "",
      skills: [
        "⚡ Experience working on multiple cloud platforms such as AWS and GCP",
        "⚡ Hosting and maintaining responsive websites on cloud along with integration of Google Maps and Yelp APIs",
        "⚡ Deploying microservices to cloud with Terraform and CI/CD pipeline",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          //fontAwesomeClassname: "skill-icons:aws-light",
          imageSrc: "aws_logo.svg",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          //fontAwesomeClassname: "skill-icons:gcp-light",
          imageSrc: "gcp_logo.svg",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          //fontAwesomeClassname: "skill-icons:docker",
          imageSrc: "docker_logo.svg",
          style: {
            color: "#1488C6",
          },
        },
        //{
        //skillName: "Kubernetes",
        //fontAwesomeClassname: "simple-icons:kubernetes",
        //style: {
        //color: "#326CE5",
        //},
        //},
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //{
    //siteName: "LeetCode",
    //iconifyClassname: "simple-icons:leetcode",
    //style: {
    //color: "#F79F1B",
    //},
    //profileLink: "https://leetcode.com/haojungc/",
    //},
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "M.S. in Computer Science",
      logo_path: "usc_logo.png",
      alt_name: "USC",
      duration: "Expected: May 2024",
      descriptions: [
        "⚡ GPA: 3.82/4.0",
        "⚡ I have studied subjects such as Algorithms, Computer Networks, Security Systems, etc.",
        "⚡ Apart from this, I have done projects about Web Development, Socket Programming, and Cloud Computing Services.",
      ],
      //website_link: "https://www.usc.edu/",
    },
    {
      title: "National Cheng Kung University",
      subtitle: "B.S. in Computer Science and Information Engineering",
      logo_path: "ncku_logo.png",
      alt_name: "NCKU",
      duration: "2021",
      descriptions: [
        "⚡ GPA: 4.03/4.3",
        "⚡ I have taken varity of courses related to Data Structures, Algorithms, Operating Systems, etc.",
      ],
      //website_link: "https://web.ncku.edu.tw/index.php",
    },
  ],
};

const certifications = {
  certifications: [
    //{
    //title: "Machine Learning",
    //subtitle: "- Andrew Ng",
    //logo_path: "stanford_logo.png",
    //certificate_link:
    //"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //alt_name: "Stanford University",
    //color_code: "#8C151599",
    //},
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  //subtitle: "Work, Internship and Volunteership",
  description: "",
  //"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    //{
    //title: "Work",
    //work: true,
    //experiences: [
    //{
    //title: "DevOps Engineering Intern",
    //company: "Yahoo! Inc.",
    //company_url: "https://www.yahooinc.com/",
    //logo_path: "yahoo_logo.png",
    //duration: "July 2023 - Aug 2023",
    //location: "Taipei, Taiwan",
    //description:
    //"I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //color: "#0879bf",
    //},
    //{
    //title: "Android and ML Developer",
    //company: "Muffito Incorporation",
    //company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //logo_path: "muffito_logo.png",
    //duration: "May 2018 - Oct 2018",
    //location: "Pune, Maharashtra",
    //description:
    //"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //color: "#9b1578",
    //},
    //{
    //title: "Android Developer",
    //company: "FreeCopy Pvt. Ltd.",
    //company_url: "https://www.linkedin.com/company/freecopy/about/",
    //logo_path: "freecopy_logo.png",
    //duration: "Nov 2017 - Dec 2017",
    //location: "Ahmedabad, Gujarat",
    //description:
    //"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //color: "#fc1f20",
    //},
    //],
    //},
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "DevOps Engineering Intern",
          company: "Yahoo! Inc.",
          company_url: "https://www.yahooinc.com/",
          logo_path: "yahoo_logo.png",
          duration: "July 2023 - August 2023",
          //location: "Taipei, Taiwan",
          description:
            "⚡ Collaborated with 2 frontend and 2 backend engineers using Scrum to build generative AI-based news recommendation service\n" +
            "⚡ Automated AWS infrastructure provisioning with Terraform, managing more than 100 resources (VPC, API Gateway, Lambda, ElastiCache); secured REST API with mutual TLS using Route 53 and AWS Certificate Manager to prevent unauthorized access\n" +
            "⚡ Resolved unplanned infrastructure changes by adopting GitOps with Terraform and CI/CD pipeline to detect and fix AWS resource drift periodically and enable production engineers to review potential infrastructure changes during pull requests",
          color: "#0879bf",
        },
        //{
        //title: "Data Science Research Intern",
        //company: "Delhivery Pvt. Ltd.",
        //company_url: "https://www.delhivery.com/",
        //logo_path: "delhivery_logo.png",
        //duration: "May 2019 - Sept 2019",
        //location: "Gurgaon, Haryana",
        //description:
        //"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //color: "#ee3c26",
        //},
        //{
        //title: "Data Science Intern",
        //company: "Intel Indexer LLC",
        //company_url:
        //"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //logo_path: "intel_logo.jpg",
        //duration: "Nov 2018 - Dec 2018",
        //location: "Work From Home",
        //description:
        //"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //color: "#0071C5",
        //},
      ],
    },
    //{
    //title: "Volunteerships",
    //work: false,
    //experiences: [
    ////{
    ////title: "Google Explore ML Facilitator",
    ////company: "Google",
    ////company_url: "https://about.google/",
    ////logo_path: "google_logo.png",
    ////duration: "June 2019 - April 2020",
    ////location: "Hyderabad, Telangana",
    ////description:
    ////"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    ////color: "#4285F4",
    ////},
    ////{
    ////title: "Microsoft Student Partner",
    ////company: "Microsoft",
    ////company_url: "https://www.microsoft.com/",
    ////logo_path: "microsoft_logo.png",
    ////duration: "Aug 2019 - May 2020",
    ////location: "Hyderabad, Telangana",
    ////description:
    ////"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    ////color: "#D83B01",
    ////},
    ////{
    ////title: "Mozilla Campus Captain",
    ////company: "Mozilla",
    ////company_url: "https://www.mozilla.org/",
    ////logo_path: "mozilla_logo.png",
    ////duration: "Oct 2019 - May 2020",
    ////location: "Kurnool, Andhra Pradesh",
    ////description:
    ////"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    ////color: "#000000",
    ////},
    ////{
    ////title: "Developer Students Club Member",
    ////company: "DSC IIITDM Kurnool",
    ////company_url:
    ////"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    ////logo_path: "dsc_logo.png",
    ////duration: "Jan 2018 - May 2020",
    ////location: "Kurnool, Andhra Pradesh",
    ////description:
    ////"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    ////color: "#0C9D58",
    ////},
    ////{
    ////title: "Developer Program Member",
    ////company: "Github",
    ////company_url: "https://github.com/",
    ////logo_path: "github_logo.png",
    ////duration: "July 2019 - PRESENT",
    ////location: "Work From Home",
    ////description:
    ////"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    ////color: "#181717",
    ////},
    //],
    //},
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  //"My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  //title: "Publications",
  //description:
  //"I have worked on and published a few research papers and publications of my own.",
  //avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    //{
    //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //name: "Artificial Intelligence Paper",
    //createdAt: "2020-03-06T16:26:54Z",
    //description: "Paper Written on Artificial Intelligence published in xyz ",
    //url:
    //"https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //},
    //{
    //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //name: "Artificial Intelligence Paper",
    //createdAt: "2020-03-06T16:26:54Z",
    //description: "Paper Written on Artificial Intelligence published in xyz ",
    //url:
    //"https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //},
    //{
    //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //name: "Artificial Intelligence Paper",
    //createdAt: "2020-03-06T16:26:54Z",
    //description: "Paper Written on Artificial Intelligence published in xyz ",
    //url:
    //"https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //},
    //{
    //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //name: "Artificial Intelligence Paper",
    //createdAt: "2020-03-06T16:26:54Z",
    //description: "Paper Written on Artificial Intelligence published in xyz ",
    //url:
    //"https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //},
    //{
    //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //name: "Artificial Intelligence Paper",
    //createdAt: "2020-03-06T16:26:54Z",
    //description: "Paper Written on Artificial Intelligence published in xyz ",
    //url:
    //"https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //},
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "headshot.png",
    description: "Feel free to send me a connect request or email!",
  },
  blogSection: {
    //title: "Blogs",
    //subtitle:
    //"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    //link: "https://blogs.ashutoshhathidara.com/",
    //avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "City",
    subtitle: "Los Angeles, CA",
    locality: "",
    country: "United States",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Mobile",
    subtitle: "(314) 600-7714",
  },
  emailSection: {
    title: "Email",
    subtitle: "haojungc@usc.edu",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
