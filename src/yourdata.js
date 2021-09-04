// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import codeIcon from "./images/database.svg"
import pythonIcon from './images/python.svg'


// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

//images
import aboutImage from "./images/profile2.png"
import bitandsalt from "./images/bitandsalt.png"
import spainWebsite from "./images/spainWesite.png"
import vantech from "./images/vantech.png"
import youclone from "./images/youtubemain.jpg"

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

  // Work Section ------------------------
  projects: [
    {
      title: "Youtube clone ", //Project Title - Add Your Project Title Here
      para:
      "Comming Soon " ,//Project Image - Add Your Project Image Here
      imageSrc:
        youclone,
      //Project URL - Add Your Project Url Here
      url: "/ ",
    },
    {
      title: "Bit and Salt company build web site", //Project Title - Add Your Project Title Here
      para:
        "Overall build up web pages and functions - May 2021", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bitandsalt,
      //Project URL - Add Your Project Url Here
      url: "https://www.bitandsalt.com/",
    },
    {
      title: "English School in Spain", //Project Title - Add Your Project Title Here
      para:
        "I worked SOBRE NOSOTROS,CURSOS and CONTACTO pages - Mar 2019", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      spainWebsite,
      //Project URL - Add Your Project Url Here
      url: "https://trulycanadian-ed.com/",
    },
    {
      title: "Vantechs company", //Project Title - Add Your Project Title Here
      para:
        "Commercial Website rebuild project - jan 2019", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      vantech,
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
    "511 Rochester ave, Coquitlam, BC V3K 0A2",
  aboutParaThree:
    "developer.daniel512@gmail.com",
  aboutImage:
    aboutImage,
  linkedIn :
  'https://www.linkedin.com/in/daniel-yuwan-goh-597207187',
  resume :
  "https://drive.google.com/file/d/16nhJ30WCtLQyIYVLY5vZLOE9m67j3R2K/view?usp=sharing",
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
      url: 'https://www.linkedin.com/in/daniel-yuwan-goh-597207187',
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
