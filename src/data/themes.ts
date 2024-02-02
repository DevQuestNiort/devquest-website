export const themes: Theme[] = [
  {
    img: "/assets/archer.png",
    name: "Front-End",
    details: "React, Typescript, Vite, ..."
  },
  {
    img: "/assets/necromancer.png",
    name: "Back-End",
    details: "Java, Spring, NodeJS, ..."
  },
  {
    img: "/assets/shaman.png",
    name: "Design & UX",
    details: "Figma, Design thinking, ..."
  },
  {
    img: "/assets/knight.png",
    name: "Méthodo & Architecture",
    details: "Artisanat, Design patterns, ..."
  },
  {
    img: "/assets/dwarf.png",
    name: "Cloud & DevSecOps",
    details: "GCP, CI-CD, ..."
  },
  {
    img: "/assets/role-playing.png",
    name: "Quêtes Secondaires",
    details: "Gwent ?"
  },
];


export interface Theme {
  img: string;
  name: string;
  details: string;
}
