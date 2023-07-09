import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Juan Perez",
    summary:
      "Ingeniero obsesionado en la construcción e implementación de productos que la gente ame!",
    email: "juanperez@fullstackarchitect.dev",
    phone: "56-99-9999999",
    location: "Santiago, Chile",
    url: "resume.fullstackarchitect.dev",
    url_github: "github.com/username",
    url_linkedin: "linkedin.com/in/user_profile"
  },
  workExperiences: [
    {
      company: "Empresa Ejemplar",
      jobTitle: "Ingeniero de Software",
      date: "May 2023 - Presente",
      descriptions: [
        "Liderar un equipo multi-funcional de 6 ingenieros a desarrollar una aplicación de juntas para usuarios de la plataforma de reddit",
        "Crear una aplicación web para organizar torneos de futbol entre clubes informales a lo largo del país",
        "Escribir código estructurado e impecable que es modular y fácil de mantener asegurando un test coverage del 100%"
      ],
    },
    {
      company: "Fundación RD",
      jobTitle: "Practicante de Ingeniero Informático",
      date: "Verano 2022",
      descriptions: [
        "Rediseño del editor de contenido para que sea responsive en dispositivos móviles que generó un aumento del 10% de usuarios de la aplicación",
        "Crear una barra de progreso para mejorar la experiencia de usuario que aumentó la retención de un 15% de usuarios en el proceso",
        "Detectar y arreglar 5 bugs en el código existente, consiguiendo así evitar pérdidas mayores de los recursos obtenidos"
      ],
    },
    {
      company: "Universidad 31 Minutos",
      jobTitle: "Asistente de Investigación",
      date: "Verano 2021",
      descriptions: [
        "Idear un algoritmo NLP para clasificación de texto que resultó en un 10% de incremento de precisión",
        "Compilar y presentar resultados de investigación a un grupo de 20+ académicos y estudiantes"
      ],
    },
  ],
  educations: [
    {
      school: "Universidad 31 Minutos",
      degree: "Ingeniería en Computación e Informática",
      date: "Sep 2019 - May 2023",
      gpa: "6.8",
      descriptions: [
        "Obtener 1er lugar en la Hackaton the Educación el 2022, 2do lugar en la Competencia de Fintech 2023",
        "Ayudante de profesor para el ramo Lenguajes de Programación (2022 - 2023)",
      ],
    },
  ],
  projects: [
    {
      project: "OpenResume",
      date: "Primavera 2023",
      descriptions: [
        "Modificaciones y Hosting de OpenResume para que miles de profesionales puedan crear sus CV de forma simple y así puedan lograr sus sueños",
        "Creada aplicación de Inteligencia Artificial Generativa para crear una aplicación que transforma tus dibujos en obras de arte"
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 2 },
    ],
    descriptions: [
      "Tecnologías: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Habilidades Blandas: Trabajo en equipo, Solución creativa de problemas, Comunicación, Mentalidad de aprendizaje, Metodologías Agiles",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
