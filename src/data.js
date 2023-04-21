import React from "react";

import {
  FaRegObjectGroup,
  FaTwitter,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import { MdAnalytics, MdEmail, MdGroups } from "react-icons/md";

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
    servicesLink: [
      {
        id: 1,
        name: "Training",
        path: "/training",
      },
      {
        id: 2,
        name: "Air Ticheting",
        path: "/air-ticheting",
      },
      {
        id: 3,
        name: "Consultancy",
        path: "/consultancy",
      },
      {
        id: 4,
        name: "Visa Application",
        path: "/visa-application",
      },
      {
        id: 5,
        name: "Hotel Reservation",
        path: "/hotel-reservation",
      },
    ],
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
    icon: <FaRegObjectGroup />,
    title: " Aviation Training",
    decription:
      "We offer professional courses in short and long period and we award internationally   recognized certificates, advanced certificates, diplomas and advanced diplomas.",
  },
  {
    id: 2,
    icon: <MdGroups />,
    title: "Air Ticketing",
    decription:
      "We offer a range of short and professional courses in air ticketing to help individuals develop their skills and advance their careers in the aviation industry.",
  },
  {
    id: 3,
    icon: <MdAnalytics />,
    title: "Admission And Visa Assistance",
    decription:
      "We have extensive knowledge and experience with the admission and visa processes of various countries and can provide personalized support to students",
  },
];

export const upcammingCourses = [
  {
    id: 1,
    courseImage: require("./assets/images/course1.jpg"),
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
    courseImage: require("./assets/images/Sdudent3.jpeg"),
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
    courseImage: require("./assets/images/StdentCertificate.jpeg"),
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
    courseImage: require("./assets/images/course1.jpg"),
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
    courseImage: require("./assets/images/StdentCertificate.jpeg"),
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
    courseImage: require("./assets/images/Sdudent3.jpeg"),
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
    linkConnection: "mailto:info@timtomaviation.com",
    icon: <MdEmail />,
  },
  {
    id: 2,
    linkConnection: "www.faceebook.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    linkConnection: "http://wa.me/+250788519634",
    icon: <FaWhatsappSquare />,
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
