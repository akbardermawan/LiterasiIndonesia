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
    title: "Andai Aku Jadi Penguasa",
    author: "Akbar Dermawan Mahbubillah",
    category: "Self Improvement",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 3,
    title: "Bersatulah Umat Islam",
    author: "Akbar Dermawan Mahbubillah",
    category: "Self Improvement",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
  },
  {
    id: 4,
    title: "Jalan Bercabang",
    author: "Akbar Dermawan Mahbubillah",
    category: "Self Improvement",
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=500",
  },
];
const topBooks = [
  {
    id: 1,
    title: "Indonesia 2035",
    author: "Akbar Dermawan Mahbubillah",
    category: "Politic",
    image: "/images/indonesia2035.jpg",
  },
  {
    id: 2,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    category: "Self Improvement",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Improvement",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=500",
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
