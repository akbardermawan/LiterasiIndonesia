const books = [
  {
    id: 1,
    title: "Indonesia 2035",
    author: "Akbar Dermawan Mahbubillah",
    category: "Politic",
    image: "/images/indonesia2035.jpg",
    url: "/indonesia2035",
  },

  {
    id: 2,
    title: "Jalan Bercabang",
    author: "Akbar Dermawan Mahbubillah",
    category: "Self Improvement",
    image: "/images/jalanbercabang.jpg",
    url: "/jalanbercabang",
  },
];
const topBooks = [
  {
    id: 1,
    title: "Indonesia 2035",
    author: "Akbar Dermawan Mahbubillah",
    category: "Politic",
    image: "/images/indonesia2035.jpg",
    url: "/indonesia2035",
  },
  {
    id: 2,
    title: "Jalan Bercabang",
    author: "Akbar Dermawan Mahbubillah",
    category: "Self Improvement",
    image: "/images/jalanbercabang.jpg",
    url: "/jalanbercabang",
  },
];

const NAVBAR = [
  { id: 1, name: "HOME", url: "/" },
  { id: 2, name: "ABOUT", url: "/about" },
  {
    id: 4,
    name: "HIGHLIGHTS",
    url: "/highlights",
    children: [
      { id: 1, name: "Top Books", url: "/highlights/topbooks" },
      { id: 2, name: "New Books", url: "/highlights/newbooks" },
    ],
  },
];

export { books, topBooks, NAVBAR };
