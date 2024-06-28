import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "expe",
      title: "Experience",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App Mobile Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "School SMKN 1 CIOMAS",
      icon: web,
      iconBg: "#383E56",
      date: "July 2020 - Now",
      points: [
        "Portofolio Website REACT",
        "MERN STACK Website ( To Do List ) ",
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "School",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "August 2022 - Now",
      points: [
        "E-Commerce",
        "Sistem Informasi Tamu",
      ],
    },
    {
      title: "Flutter Developer",
      company_name: "School",
      icon: shopify,
      iconBg: "#383E56",
      date: "September 2022 - Now",
      points: [
        "KasKu ( Sistem Buku Kas Mobile )",
        "Firebase,Firestore,Firebase AUTH Dan Google Console API ( Mobile Phone Verification )",
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "KASKU",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "September 2022 - Now",
      points: [
        "Flutter APP",
      ],
    },
    {
      title: "Web Three Js Developer",
      company_name: "School",
      icon: threejs,
      iconBg: "#383E56",
      date: "March 2023 - Now",
      points: [
        "Portofolio Website",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "NOTHING YET",
      name: "NOTHING YET",
      designation: "NOTHING YET",
      company: "NOTHING YET",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "NOTHING YET",
      name: "NOTHING YET",
      designation: "NOTHING YET",
      company: "NOTHING YET",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "KasKU",
      description:
        "Aplikasi Buku Kas Yang Bisa Digunakan Untuk Menyimpan Catatan Keuangan Pengeluaran Dan Pendapatan",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Google Console API",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://drive.google.com/drive/folders/1ZY_Iuvu8motgDyXkG4eEgYzwMnYbRVzn?usp=drive_link",
    },
    {
      name: "Message From Website",
      description:
        "Sebuah Backend Yang Digunakan Untuk Mengirim Pesan Dari Website Melalui API Menggunakan Whatsapp,Telegram Dan Email",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ad Server",
      description:
        "Aplikasi Untuk Pemasangan Iklan Dan Bisa Di Iklan Kan Di Website/Aplikasi Mana Pun Dan Kapan Pun",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
