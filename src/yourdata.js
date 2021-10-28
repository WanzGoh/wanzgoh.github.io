// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import codeIcon from "./images/database.svg"
import pythonIcon from './images/python.svg'
import flutterIcon from "./images/s-flutter-logo.svg"
import javaIcon from "./images/java.svg"


// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

//images
import aboutImage from "./images/profile2.png"
import bitandsalt from "./images/bitandsalt.png"
import spainWebsite from "./images/spainWesite.png"
import vantech from "./images/vantech.png"
import youclone from "./images/yourvideo.png"
import facebookclone from './images/facebookclone.png'
import duchess  from "./images/duchess.png"
export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: " ",
  headerTagline: [
    //Line 1 For Header
    "I'm Yuwan Go",
    //Line 2 For Header
    "Web Developer",
    //Line 3 For Header
    "based in Vancouver",
  ],
  //   Header Paragraph
  headerParagraph: " ",
  //Contact Email
  contactEmail: "developer.daniel512@gmail.com",

  // End Header Details -----------------------

  
  // Project SEction --------------------------
  projects : [
    {
      title: "korean Community Website  ", //Project Title - Add Your Project Title Here
      para:
      "Recat, Firebase, Figma" ,//Project Image - Add Your Project Image Here
      imageSrc:
        facebookclone,
      //Project URL - Add Your Project Url Here
      url: "https://kovan-8047c.web.app/", 
    },
    {
      title: "Your Video upload ", //Project Title - Add Your Project Title Here
      para:
      "React JS, MongoDB " ,//Project Image - Add Your Project Image Here
      imageSrc:
        youclone,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/WanzGoh/youtube_-clone.reactJs",
    },
    {
      title: "Bit and Salt company build web site", //Project Title - Add Your Project Title Here
      para:
        "Wix, JavaScript, Photoshop", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bitandsalt,
      //Project URL - Add Your Project Url Here
      url: "https://www.bitandsalt.com/",
    },
  ],
  
  
  
  // Work Section ------------------------
  works: [
    {
      title: "Duchess Designs Ltd", //Project Title - Add Your Project Title Here
      para:
        "Worked with a team of 3 on building an image storage server projectContributed to the project to rebuild the website and collaborate with graphic designers", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      duchess,
      //Project URL - Add Your Project Url Here
      url: "/",
    },
    {
      title: "Vantechs company", //Project Title - Add Your Project Title Here
      para:
        "Rebuilt the old website into modern web-designsManaged cloud and organized image files, document files", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      vantech,
      //Project URL - Add Your Project Url Here
      url: "https://vantechs.com/",
    },
    {
      title: "English School in Spain", //Project Title - Add Your Project Title Here
      para:
        "Contributed to the project to build a website which is a study abroad institute operated in SpainCreated website heather, footer, navigation, content and contact pages collaborated with graphic designers", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      spainWebsite,
      //Project URL - Add Your Project Url Here
      url: "https://trulycanadian-ed.com/",
    },      
    // {
    //   title: "", //Project Title - Add Your Project Title Here
    //   para:
    //     "", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "",
    //   //Project URL - Add Your Project Url Here
    //   url: "",
    // },
    // {
    //   title: "", //Project Title - Add Your Project Title Here
    //   para:
    //     "", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "",
    //   //Project URL - Add Your Project Url Here
    //   url: "",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Section --------------
  // name
  aboutParaOne:
    "Yuwan Go",
    //address
  aboutParaTwo:
    "Develop personal and commercial projects consisting of components using React. When developing the web, it complies with the responsive type, web standard, and web accessibility. I have experience in distributing real servers using WordPress, Wix, and Shopify. I'm continuing to gain experience through various development works.",
  aboutParaThree:
    "developer.daniel512@gmail.com",
  aboutImage:
    aboutImage,
  linkedIn :
  'https://www.linkedin.com/in/daniel-yw/',
  resume :
  "https://drive.google.com/file/d/1FBBQihlE6nSlOwZBQH7Q45Y6X6ESH-JF/view?usp=sharing",
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JS",
    },
    {
      img: reactIcon,
      para:
        "REACT",
    },
    // {
    //   img: reactIcon,
    //   para:
    //     "REACT NAITIVE",
    // },
    {
      img: javaIcon,
      para:
        "JAVA",
    },
    // {
    //   img: flutterIcon,
    //   para:
    //     "FLUTTER",
    // },
    {
      img: pythonIcon,
      para:
        "PYTHON",
    },
    {
      img: codeIcon,
      para:
        "DATABASE",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: " ",
  promotionPara:'',
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: 'https://github.com/WanzGoh' },
    {
      img: linkedinIcon,
      url: 'https://www.linkedin.com/in/daniel-yw/',
    },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
    
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
