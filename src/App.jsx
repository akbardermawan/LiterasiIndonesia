import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <>
      <main className="">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default App;
