export const members: Member[] = [
  {
    img: "/team/pacaud.jpeg",
    firstName: "Alexandre",
    lastName: "Pacaud",
    role: "#Dev",
    linkedin: "alexandre-pacaud-78266210a",
    github: "Lithyon",
  },
  {
    img: "/team/guerin.jpeg",
    firstName: "Alexandre",
    lastName: "Guérin",
    role: "#Dev",
    linkedin: "alexandre-guerin",
    github: "Ithrandil",
  },
  {
    img: "/team/lefloch.jpeg",
    firstName: "Guillaume",
    lastName: "Le Floch",
    role: "#Dev",
    github: "glefloch",
    linkedin: "guillaume-lefloch",
  },
  {
    img: "/team/nait.jpeg",
    firstName: "Samuel",
    lastName: "Nait",
    role: "#Dev",
    github: "Tisamu",
    linkedin: "samuel-nait",
  },
  {
    img: "/team/gouadon.jpeg",
    firstName: "Vincent",
    lastName: "Gouadon",
    role: "#Dev",
    linkedin: "vincent-gouadon-14099851",
    github: "nayosis",
  },
  {
    img: "/team/lecouls.jpeg",
    firstName: "Xavier",
    lastName: "Lecouls",
    role: "#ProductOwner",
    linkedin: "xavier-lecouls-53867b1",
  },
  {
    img: "/team/cozien.jpeg",
    firstName: "Alice",
    lastName: "Cozien",
    role: "#UX",
    linkedin: "cozienalice",
  },
  {
    img: "/team/duvivier.jpeg",
    firstName: "Nicolas",
    lastName: "Duvivier",
    role: "#UX",
    linkedin: "nduvivier",
  },
  {
    img: "/team/fremont.jpeg",
    firstName: "Florent",
    lastName: "Frémont",
    role: "#Dev",
    linkedin: "florent-frémont-b2a943a9",
  },
  {
    img: "/team/riou.jpeg",
    firstName: "Susan",
    lastName: "Riou",
    role: "#SysOps",
    linkedin: "susan-riou-5a7a4a139",
  },
];

export interface Member {
  img: string;
  firstName: string;
  lastName: string;
  role: string;
  github?: string;
  linkedin?: string;
}
