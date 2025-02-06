import libmax from './libmax.png';
import hostel_finder from "./hostel_finder.png";
import spell_correction from './nepali_spellchecker.png'

const projectData = [
    // {
    //   id: 1,
    //   title: "Library Management System",
    //   organization: "Little Angels’ School",
    //   date: "May 2017 - February 2018",
    //   image: "/images/libmax-school.jpg", // Replace with actual image path
    //   abstract: "A Q-BASIC based application for librarians and students to issue and return books. It calculates fines for late, damaged, or lost books.",
    //   fullDescription:
    //     "This project was developed to streamline the library operations at Little Angels’ School. It allows librarians to manage book inventory, issue books to students, and handle returns. The system also calculates fines for late returns, damaged books, or lost books. It was built using Q-BASIC, making it simple and efficient for its time.",
    //   demoLink: "#", // Replace with actual demo link
    // },
    {
      id: 1,
      title: "Libmax - Library Management System",
      organization: "Thapathali Campus",
      date: "May 2021 - September 2021",
      image: libmax,
      abstract: "A C language based application with automatic book code generation and inventory tracking.",
      fullDescription:
        "This project is an improved version of the previous library management system. It was developed in C language and includes features like automatic book code generation and tracking the number of similar books. It was designed to handle larger datasets and provide a more user-friendly interface.",
      demoLink: "#", // Replace with actual demo link
    },
    {
      id: 2,
      title: "Hostel Finder",
      organization: "Thapathali Campus",
      date: "May 2022 - September 2022",
      image: hostel_finder,
      abstract: "A GUI-based application for hostel owners to advertise and seekers to find hostels based on rooms and facilities.",
      fullDescription:
        "Hostel Finder is a GUI-based application developed to help hostel owners advertise their properties and assist students in finding suitable hostels. Users can search for hostels based on room availability, facilities, and location. The application was built using Python and Tkinter for the GUI.",
      demoLink: "#", // Replace with actual demo link
    },
    {
      id: 3,
      title: "Nepali Spelling Correction Using Transformer Model",
      organization: "Thapathali Campus",
      date: "November 2023 - April 2024",
      image: spell_correction,
      abstract: "An NLP-based project to correct word-level errors in the Nepali language using a Transformer model.",
      fullDescription:
        "This project focuses on correcting word-level errors in the Nepali language using a Transformer-based model. It compares the correction capabilities of different models and provides an efficient solution for Nepali text processing. The project was developed using Python and TensorFlow.",
      demoLink: "#", // Replace with actual demo link
    },
  ];
  
  export default projectData;