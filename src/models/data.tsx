export type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: Set<string>;
  trash: boolean;
};

export let notes: Note[] = [
  {
    id: crypto.randomUUID(),
    title: "Note 1",
    content: "This is the content of note 1",
    date: "2021-01-01",
    tags: new Set(["tag1", "tag2"]),
    trash: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Note 2",
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    date: "2021-01-02",
    tags: new Set(["tag1", "tag3"]),
    trash: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Note 3",
    content: `
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    `,
    date: "2021-01-03",
    tags: new Set(["tag2", "tag3"]),
    trash: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Note 4",
    content: "This is the content of note 4",
    date: "2021-01-04",
    tags: new Set(["tag1", "tag2"]),
    trash: true,
  },
];

export let tags: Set<string> = new Set(["tag1", "tag2", "tag3"]);
