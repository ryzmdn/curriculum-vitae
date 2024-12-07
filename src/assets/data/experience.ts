interface Experience {
  title: string;
  company: string;
  date: { from: string; to: string };
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Biffco Enterprises Ltd.",
    date: { from: "06-09-2020", to: "13-11-2021" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias voluptatem aspernatur hic eum obcaecati, repellat odit. Volupt atibus debitis minus accusamus.",
    achievements: [
      "Lorem ipsum dolor sit.",
      "amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "Junior Back-end Developer",
    company: "Acme Co.",
    date: { from: "20-11-2021", to: "11-10-2023" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias voluptatem aspernatur hic eum obcaecati, repellat odit. Volupt atibus debitis minus accusamus.",
    achievements: [
      "Ipsum architecto iste assumenda!",
      "Veritatis suscipit perspiciatis fuga aperiam,",
    ],
  },
  {
    title: "Senior Back-end Developer",
    company: "Acme Co.",
    date: { from: "12-10-2023", to: "30-03-2025" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias voluptatem aspernatur hic eum obcaecati, repellat odit. Volupt atibus debitis minus accusamus.",
    achievements: ["similique quae molestiae expedita rem! Similique"],
  },
];
