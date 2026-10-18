import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Indonesia2035 from "../books/indonesia2035/Indonesia2035";
import Jalanbercabang from "../books/jalanbercabang/Jalanbercabang";
import About from "../about/About";
import Legendsverdant from "../books/legendsverdant/Legendsverdant";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/legendsverdant" element={<Legendsverdant />} />

      <Route path="/indonesia2035" element={<Indonesia2035 />} />
      <Route path="/jalanbercabang" element={<Jalanbercabang />} />
    </Route>,
  ),
);

export default router;
