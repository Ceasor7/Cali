import { facebook, instagram, bullseye, paint, rocket, twitter, linkedin } from "../assets/icons";
import { profile12,faith, njoroge, shikuku  } from "../assets/images";
import { research, advocacy, mentorship, leadership, training } from "../assets/images";

export const navLinks = [
    { href: "#home", label:"Home" },
    { href: "#programs", label: "Programs" },
    { href: "#products", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
];





export const teams = [
    {
        imgURL: profile12,
        name: "Kevin Kimani Kahuro",
        role: "Chief Executive Officer",
    },
    {
        imgURL: shikuku,
        name: "Dr. Emmanuel Shikuku",
        role: " Head of Research and Training",
    },
    {
        imgURL: faith,
        name: "Faith Mwende",
        role: "Legal and advocacy",
    },
    {
        imgURL: njoroge,
        name: "Reiner Njoroge",
        role: "Admin & Research Officer",
    },
];

export const services = [
    {
        imgURL: paint,
        label: "About us",
        subtext: "CALI is a non-profit organization that focuses on promoting arts management in the country. It provides research, training, education, and resources to empower individuals and organizations working in the arts sector. Their aim is to create a more vibrant and sustainable arts sector in Kenya by undertaking research and increasing access to resources, funding, and growth opportunities."
    },
    {
        imgURL: rocket,
        label: "Mission",
        subtext: "CALI's mission is to support and empower individuals and organizations working in the arts sector by providing research, training, education, and resources to help build their capacity and effectiveness. We believe that a vibrant and sustainable arts sector is essential to Kenya's social and economic development, and we are committed to helping the sector thrive."
    },
    {
        imgURL: bullseye,
        label: "Vision",
        subtext: "CALI's vision is to create a dynamic and inclusive arts sector that promotes creativity, cultural diversity, and social and economic development. We envision a future in which the arts are valued and supported as a vital component of Kenyan society, and in which individuals and organizations working in the arts sector have the skills, resources, and support they need to achieve their full potential."
    },
];

export const programs = [
    {
        imgURL: research,
        prog: "CALI's research program aims evidence-based decision-making and contribute to the knowledge and understanding of the arts sector in Kenya."
    },
    {
       imgURL: training,
        prog: "CALI's training workshops focus on building skills in areas such as arts management, fundraising, marketing and audience development, financial management, and strategic planning."
    },
    {
       imgURL: leadership,
        prog: "CALI's leadership development programs aim to help emerging and established arts leaders build their skills and knowledge, deepen their understanding of the arts sector, and develop networks and connections with other arts professionals."
    },
    {
       imgURL: mentorship,
        prog: "CALI's mentorship and coaching programs pair emerging arts leaders with experienced mentors in the arts sector, providing one-on-one guidance and support to help emerging arts leaders develop their skills, build their networks, and navigate the challenges of working in the arts sector."
    },
    {
       imgURL: advocacy,
        prog: "CALI's advocacy and awareness-raising initiatives aim to raise public awareness of the importance of the arts and culture in Kenya, advocate for policies and funding that support the arts, and build partnerships and collaborations across sectors to support the growth and development of the arts sector. "
    }
];


export const footerLinks = [
  
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "cali@cali.institute", link: "mailto:cali@cali.institute" },
            { name: "P.O Box 19533 - 00100" },
            { name: "Nairobi, Kenya" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo",link:"https://www.facebook.com/profile.php?id=61552732195123" },
    { src: twitter, alt: "twitter logo",link:"https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08" },
    { src: instagram, alt: "instagram logo",link:"https://instagram.com/cali.institute?igshid=MzRlODBiNWFlZA==" },
    {src: linkedin, alt: "linkedin logo",link:"https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/"}
];
