import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // Home page
import CaseStudy from "./CaseStudy";
import Videos from "./Videos";
import WhitePaper from "./WhitePaper";

// Simple routing: "/" -> App.jsx, "/caseStudy" -> CaseStudy.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/caseStudy",
    element: <CaseStudy />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "/whitepapers",
    element: <WhitePaper />,
  },
]);

export default router;
