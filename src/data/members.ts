export const members:Member[] = [
  {
    img: "/team/pacaud.jpeg",
    name: "Alexandre Pacaud",
    role: "#Dev",
    linkedin: "alexandre-pacaud-78266210a",
    github: "Lithyon",
  },
  {
    img: "/team/guerin.jpeg",
    name: "Alexandre Guérin",
    role: "#Dev",
    linkedin: "alexandre-guerin",
    github: "Ithrandil",
  },
  {
    img: "/team/lefloch.jpeg",
    name: "Guillaume Le Floch",
    role: "#Dev",
    github: "glefloch",
    linkedin: "guillaume-lefloch",
  },
  {
    img: "/team/nait.jpeg",
    name: "Samuel Nait",
    role: "#Dev",
    github: "Tisamu",
    linkedin: "samuel-nait",
  },
  {
    img: "/team/gouadon.jpeg",
    name: "Vincent Gouadon",
    role: "#Dev",
    linkedin: "vincent-gouadon-14099851",
    github: "nayosis",
  },
  {
    img: "/team/lecouls.jpeg",
    name: "Xavier Lecouls",
    role: "#ProductOwner",
    linkedin: "xavier-lecouls-53867b1",
  },
  {
    img: "/team/cozien.jpeg",
    name: "Alice Cozien",
    role: "#UX",
    linkedin: "cozienalice",
  },
  {
    img: "/team/duvivier.jpeg",
    name: "Nicolas Duvivier",
    role: "#UX",
    linkedin: "nduvivier",
  },
  {
    img: "/team/fremont.jpeg",
    name: "Florent Frémont",
    role: "#Dev",
    linkedin: "florent-frémont-b2a943a9",
  },
  {
    img: "/team/riou.jpeg",
    name: "Susan Riou",
    role: "#SysOps",
    linkedin: "susan-riou-5a7a4a139",
  },
];

export interface Member {
  img: string;
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}
