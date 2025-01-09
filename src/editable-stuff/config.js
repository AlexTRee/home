// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alex",
  middleName: "",
  lastName: "Cui",
  message: " Passionate about pioneering advancements into a new era of personalized diagnosis and precision medicine. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tiangecui/",
    },
    {
      image: "fa-github",
      url: "https://github.com/alextree",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/alextree/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/alexcui.png"),
  imageSize: 375,
  message:
    "Hi, I’m Alex Cui, a seasoned Computational Scientist with over a decade of experience in bioinformatics and computational biology. I specialize in helping biotech and pharma companies build robust bioinformatics pipelines and computational tools to advance data analytics and scientific discovery. I hold a Ph.D. in Bioinformatics & Computational Biology from George Mason University, an M.S. in Biology from Rutgers University, and a B.E. in Bioengineering from Wuhan Institute of Technology. I’m passionate about creating innovative solutions and transforming data into actionable insights using Python, R, SQL, Shell scripting, and other engineering best practices. My expertise spans Bioinformatics, Statistics, Machine Learning, Cancer Oncology, Immunology, Molecular Biology, Human Genetics, Genomics, and Virology. Outside of work, I enjoy photography and movies. A fun fact about me: I have a growing collection of vintage cameras and lenses, reflecting my love for capturing moments through a historical lens.",
  resume: "https://www.linkedin.com/in/tiangecui/",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Sr. Bioinformatics Scientist',
      companylogo: require('../assets/img/psnl.png'),
      date: 'Febrary 2022 – January 2024',
    },
    {
      role: 'Principal Bioinformatics Scientist',
      companylogo: require('../assets/img/shihua.png'),
      date: 'June 2021 – December 2021',
    },
    {
      role: 'Bioinformatics Engineer II',
      companylogo: require('../assets/img/sgmo.png'),
      date: 'July 2020 – June 2021',
    },
    {
      role: 'Computational Scientist',
      companylogo: require('../assets/img/cofactor.png'),
      date: 'July 2018 – May 2020',
    },
    {
      role: 'Computational Biology Research Intern',
      companylogo: require('../assets/img/vrtx.png'),
      date: 'May 2016 – August 2016',
    },
    {
      role: 'Bioinformatics Research Intern',
      companylogo: require('../assets/img/regn.png'),
      date: 'May 2015 – August 2015',
    },
    {
      role: 'Bioinformatics Analyst',
      companylogo: require('../assets/img/ru.png'),
      date: 'May 2012 – May 2013',
    },
    {
      role: 'Research Technician',
      companylogo: require('../assets/img/ncpc.png'),
      date: 'May 2015 – August 2015',
    },
  ]
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Past Projects",
  gitHubUsername: "alextree", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["contedu", "ExACvcf"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/alexcui.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/alexcui.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "NGS Data Analytics", value: 90 },
    { name: "Bioinformatics Pipeline Development", value: 85 },
    { name: "Machine Learning", value: 65 },
    { name: "Statistics Modeling", value: 75 },
    { name: "Python", value: 90 },
    { name: "R", value: 90 },
    { name: "SQL", value: 80 },
    { name: "Linux Shell (Bash scripting)", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 80 },
    { name: "Leadership", value: 87 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always excited about new technologies and novel approaches to tackle CANCER.%0D%0AIf you have new positions available in the Binformatics/Data Engineering space, or if you just want to say Hi and ask questions, please feel free to email me at",
  email: "alextreecn2 [at] gmail.com",
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, experiences, repos, skills, leadership, getInTouch };
