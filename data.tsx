import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [

    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/ismael-luna-atienza-933ba7235/",
    }
];
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "FullStack Developer",
        subtitle: "Indra",
        description: "En 2023 pasé a un proyecto de Inditex en el que trabajamos con tecnolgías actuales como java 21, docker, github, sonar, git, postgreSQL, DB2 ( en algunos proyectos ). En este proyecto formo parte de un equipo muy grande de 40 personas en el que trabajamos usando SCRUM y llevamos a cabo nuevos desarrollos para Inditex. Priorizando la calidad del codigo y la eficiencia de las consultas para poder soportar tal volumen de carga.",
        date: "Currently ",
    },
    {
        id: 2,
        title: "FullStack Developer",
        subtitle: "Indra",
        description: "En Indra, comencé trabajando mi primer año para un cliente con el que trabajamos en un equipo de 12 personas, llevando metodologías ágiles, ahí trabajamos con Angular para la capa front y spring boot, spring JPA, spring hibernate para la capa backend. Base de datos oracle. Git para control de versiones, github, actions, sonar y docker",
        date: "2023 ",
    },
    {
        id: 3,
        title: "FullStack Developer",
        subtitle: "Proxya",
        description: "Empecé trabajando con Spring Boot, Spring hibernate y Spring Data JPA, en el poco tiempo que estuve me dio tiempo de emperimentar y desarrollarme profesionalmente en estos campos, trabajando en equipo con metodologías ágiles.",
        date: "Ene 2022",
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 13,
        text: "Proyectos trabajados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Desarrollo Backend",
        description: "Desarrollo de backend sólido, escalable, mantenible y eficiente. ",
    },
    {
        icon: <Pencil />,
        title: "Desarrollo Frontend",
        description: "Diseño de interfaz intuitiva para el usuario con apariencia profesional",
    },
    {
        icon: <Computer />,
        title: "Metodologías",
        description: "Adherido a metodologías ágiles y la forma de trabajar de SCRUM",
    },
    {
        icon: <Book />,
        title: "Bases de datos",
        description: "Conocimiento de numerosas bases de datos como Oracle, PostgreSQL y DB2. ",
    },
    {
        icon: <Rocket />,
        title: "Actitud",
        description: "Actitud proactiva, con ganas de trabajar y construir productos de alto nivel",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataSkills = [
    {
        id: 1,
        title: "Java",
        image: "/java.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Angular",
        image: "/angular.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "PostgreSQL",
        image: "/postgres.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Oracle",
        image: "/oracle.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Docker",
        image: "/docker.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Spring Boot",
        image: "/spring.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "REST API",
        image: "/restapi.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "GIT",
        image: "/git.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 9,
        title: "GITHUB",
        image: "/github.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 10,
        title: "Sonar",
        image: "/sonar.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 11,
        title: "ACTIONS",
        image: "/gitactions.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 12,
        title: "VS-code & Intellij",
        image: "/jetbrains.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Base de datos",
        description:
            "Reducción del 80% del tiempo de respuesta consultas de base de datos de uno de nuestros proyectos. ",
        imageUrl: "/postgres.jpg",
    },
    {
        id: 2,
        name: "Angular",
        description:
            "Coordinar el desarrollo desde 0 de una aplicación angular, tratando con equipo de diseño para implementar una app intuitiva, funcional y profesional",
        imageUrl: "/angular.jpg",
    },
    {
        id: 3,
        name: "Java",
        description:
            "Arquitectura de nueva aplicación implementada desde 0. Desarrollo de aplicaciones siguiendo los principios SOLID y manteniendo buenas practicas y documentando procesos.",
        imageUrl: "/java.jpg",
    },
    {
        id: 4,
        name: "Comuncación con cliente",
        description:
            "Reunirme con cliente para concretar aspectos de la aplicación, negociando funcionalidades y llegando a acuerdos con ellos. Generar confianza con el cliente para facilitar el trabajo",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Docker",
        description:
            "Implementación de servicios en docker y configuración de ellos en diferentes microservicios. Añadiendo servicios importantes como caché.",
        imageUrl: "/docker.jpg",
    }
];