import {
  FaCampground,
  FaInstagram,
  FaRegObjectGroup,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAnalytics, MdFacebook, MdGroups } from "react-icons/md";

export const links = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Services",
    path: "/services",
    id: 2,
  },
  {
    name: "About",
    path: "/about_us",
    id: 3,
  },

  {
    name: "Contact",
    path: "/contact_us",
    id: 4,
  },
];

export const whatWeOffer = [
  {
    id: 1,
    icon: <MdGroups />,
    title: "Provide Knowledge",
    decription:
      "We provide the best knowledge and practical work experience to our students",
  },
  {
    id: 2,
    icon: <MdAnalytics />,
    title: "consultancy service",
    decription:
      "We provide the best consultancy service in aviation tourism and hospitality s",
  },
  {
    id: 3,
    icon: <FaCampground />,
    title: "Empower Human",
    decription:
      " We empower , develop and train human resources from aviation and related companies ",
  },
  {
    id: 4,
    icon: <FaRegObjectGroup />,
    title: " Assist students",
    decription:
      "we Assist students from other schools to complete their internship programs",
  },
];

export const upcammingCourses = [
  {
    id: 1,
    courseImage: require("./assets/images/course1-740x500 (1).jpg"),
    altImage: "Advanced Certificate in AirLine and airPort",
    money: 500,
    likes: 4,
    title: "ADVANCED CERTIFICATE IN AIRLINE AND AIRPORT",
    teacher: [
      {
        position: "Admin",
        professionalism: "AirPort",
      },
    ],
    lesson: [
      {
        studentAvailable: 50,
        courseTime: "1_mounth",
        numberOfLessons: 4,
      },
    ],
  },
  {
    id: 2,
    courseImage: require("./assets/images/course2.jpg"),
    altImage: "Advanced Certificate in AirLine and airPort",
    money: 600,
    likes: 4,
    title: "ADVANCED CERTIFICATE IN AIRLINE AND AIRPORT",
    teacher: [
      {
        position: "Admin",
        professionalism: "AirPort",
      },
    ],
    lesson: [
      {
        studentAvailable: 50,
        courseTime: "1_mounth",
        numberOfLessons: 4,
      },
    ],
  },
  {
    id: 3,
    courseImage: require("./assets/images/course4.jpg"),
    altImage: "Advanced Certificate in AirLine and airPort",
    money: 700,
    likes: 4,
    title: "ADVANCED CERTIFICATE IN AIRLINE AND AIRPORT",
    teacher: [
      {
        id: 1,
        position: "Proffesor",
        professionalism: "Hotel",
      },
    ],
    lesson: [
      {
        id: 2,
        studentAvailable: 50,
        courseTime: "1_mounth",
        numberOfLessons: 4,
      },
    ],
  },
  {
    id: 4,
    courseImage: require("./assets/images/course4.jpg"),
    altImage: "Advanced Certificate in AirLine and airPort",
    money: 800,
    likes: 4,
    title: "ADVANCED CERTIFICATE IN AIRLINE AND AIRPORT",
    teacher: [
      {
        position: "Teacher",
        professionalism: "AirPort",
      },
    ],
    lesson: [
      {
        studentAvailable: 50,
        courseTime: "1_mounth",
        numberOfLessons: 4,
      },
    ],
  },
  {
    id: 5,
    courseImage: require("./assets/images/course4.jpg"),
    altImage: "Advanced Certificate in AirLine and airPort",
    money: 800,
    likes: 4,
    title: "ADVANCED CERTIFICATE IN AIRLINE AND AIRPORT",
    teacher: [
      {
        position: "Teacher",
        professionalism: "AirPort",
      },
    ],
    lesson: [
      {
        studentAvailable: 50,
        courseTime: "1_mounth",
        numberOfLessons: 4,
      },
    ],
  },
  {
    id: 6,
    courseImage: require("./assets/images/course4.jpg"),
    altImage: "Advanced Certificate in AirLine and airPort",
    money: 800,
    likes: 4,
    title: "ADVANCED CERTIFICATE IN AIRLINE AND AIRPORT",
    teacher: [
      {
        position: "Teacher",
        professionalism: "AirPort",
      },
    ],
    lesson: [
      {
        studentAvailable: 50,
        courseTime: "1_mounth",
        numberOfLessons: 4,
      },
    ],
  },
];

export const SocialMediaData = [
  {
    id: 1,
    linkConnection: "www.faceebook.com",
    icon: <MdFacebook />,
  },
  {
    id: 2,
    linkConnection: "www.faceebook.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    linkConnection: "www.faceebook.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    linkConnection: "www.faceebook.com",
    icon: <FaYoutube />,
  },
];

export const latestCourseData = [
  {
    id: 1,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 2,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 3,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 4,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 5,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 6,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 7,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 8,
    course: "Civil Engeneering",
    linkTo: "#",
  },
  {
    id: 9,
    course: "Civil Engeneering",
  },
];
