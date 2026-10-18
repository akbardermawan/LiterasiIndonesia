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
  {
    id: 3,
    title: "Legends of the Verdant Kingdom",
    author: "Akbar Dermawan Mahbubillah",
    category: "Fantasi",
    image: "/images/legendsverdant.jpg",
    url: "/legendsverdant",
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

const HeroImgAbout = [
  { id: 1, name: "1", img: "/books.JPG" },
  { id: 2, name: "2", img: "/library.jpg" },
  { id: 3, name: "3", img: "/LI.png" },
];

export { books, topBooks, NAVBAR, HeroImgAbout };
