// const myskill_data = [
//     {
//         s_n: 1,
//         s_name: "Languages",
//         programs: [
//             { p_1_no: 1, p_1_name: "C/C++" },
//             { p_1_no: 2, p_1_name: "Python" },
//             { p_1_no: 3, p_1_name: "HTML" },
//             { p_1_no: 4, p_1_name: "CSS" },
//             { p_1_no: 5, p_1_name: "JavaScript" },
//         ],
//     },
//     {
//         s_n: 2,
//         s_name: "Library / Frameworks",
//         programs: [
//             { p_1_no: 1, p_1_name: "React" },
//             { p_1_no: 2, p_1_name: "Bootstrap" },
//             { p_1_no: 3, p_1_name: "WordPress" },
//             { p_1_no: 4, p_1_name: "Hadoop" },
//         ],
//     },
//     {
//         s_n: 3,
//         s_name: "Tools",
//         programs: [
//             { p_1_no: 1, p_1_name: "GIT & GitHub" },
//             { p_1_no: 2, p_1_name: "MS Office" },
//             { p_1_no: 3, p_1_name: "LaTeX" },
//         ],
//     },
//     {
//         s_n: 4,
//         s_name: "Platform",
//         programs: [
//             { p_1_no: 1, p_1_name: "Windows" },
//             { p_1_no: 2, p_1_name: "Linux" },
//         ],
//     },
//     {
//         s_n: 5,
//         s_name: "Databases",
//         programs: [
//             { p_1_no: 1, p_1_name: "MySQL" },
//         ],
//     },
// ];

// export default myskill_data;










import { FaCode, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaWordpress, FaDatabase, FaGitAlt, FaWindows, FaLinux, FaServer, FaMicrosoft } from 'react-icons/fa';
import { SiCplusplus, SiLatex, SiMysql } from 'react-icons/si';

const myskill_data = [
    {
        s_n: 1,
        s_name: "Languages",
        s_icon: <FaCode />, // Icon for the category
        programs: [
            { p_1_no: 1, p_1_name: "C/C++", p_icon: <SiCplusplus /> },
            { p_1_no: 2, p_1_name: "Python", p_icon: <FaPython /> },
            { p_1_no: 3, p_1_name: "HTML", p_icon: <FaHtml5 /> },
            { p_1_no: 4, p_1_name: "CSS", p_icon: <FaCss3 /> },
            { p_1_no: 5, p_1_name: "JavaScript", p_icon: <FaJs /> },
        ],
    },
    {
        s_n: 2,
        s_name: "Library / Frameworks",
        s_icon: <FaReact />, // Icon for the category
        programs: [
            { p_1_no: 1, p_1_name: "React", p_icon: <FaReact /> },
            { p_1_no: 2, p_1_name: "Bootstrap", p_icon: <FaBootstrap /> },
            { p_1_no: 3, p_1_name: "Wordpress", p_icon: <FaWordpress /> },
            { p_1_no: 4, p_1_name: "Hadoop", p_icon: <FaServer /> }, // Replaced with FaServer
        ],
    },
    {
        s_n: 3,
        s_name: "Tools",
        s_icon: <FaGitAlt />, // Icon for the category
        programs: [
            { p_1_no: 1, p_1_name: "GIT & GitHub", p_icon: <FaGitAlt /> },
            { p_1_no: 2, p_1_name: "MS-Office", p_icon: <FaMicrosoft /> }, // Alternative icon
            { p_1_no: 3, p_1_name: "LaTeX", p_icon: <SiLatex /> },
        ],
    },
    {
        s_n: 4,
        s_name: "Platform",
        s_icon: <FaWindows />, // Icon for the category
        programs: [
            { p_1_no: 1, p_1_name: "Windows", p_icon: <FaWindows /> },
            { p_1_no: 2, p_1_name: "Linux", p_icon: <FaLinux /> },
        ],
    },
    {
        s_n: 5,
        s_name: "Databases",
        s_icon: <FaDatabase />, // Icon for the category
        programs: [
            { p_1_no: 1, p_1_name: "MySQL", p_icon: <SiMysql /> },
        ],
    },
];

export default myskill_data;