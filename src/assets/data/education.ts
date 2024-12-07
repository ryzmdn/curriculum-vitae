interface Education {
  degree: string;
  institution: string;
  date: { from: string, to: string },
  gpa: number
}

export const educations: Education[] = [
  {
    degree: "Student",
    institution: "Kindergarten",
    date: { from: "10-05-2007", to: "10-06-2008" },
    gpa: 3.4
  },
  {
    degree: "Student",
    institution: "Elementary school",
    date: { from: "17-10-2008", to: "22-11-2014" },
    gpa: 3.6
  },
  {
    degree: "Student",
    institution: "Junior high school",
    date: { from: "10-03-2014", to: "10-03-2017" },
    gpa: 3.58
  },
  {
    degree: "Student",
    institution: "High school",
    date: { from: "16-06-2017", to: "17-05-2020" },
    gpa: 3.71
  },
  {
    degree: "Bachelor Degree",
    institution: "University",
    date: { from: "20-08-2020", to: "22-09-2024" },
    gpa: 3.85
  },
];