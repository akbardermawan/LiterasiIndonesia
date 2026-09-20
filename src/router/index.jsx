import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Indonesia2035 from "../books/indonesia2035/Indonesia2035";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/indonesia2035" element={<Indonesia2035 />} />
    </Route>,
  ),
);

export default router;
