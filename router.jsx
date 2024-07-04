import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./src/App";
import About from "./src/pages/About";
import Projects from "./src/pages/Project";
import Contact from "./src/pages/Contact";


export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "about", element: <About />},
    {path: "projects", element: <Projects />},
    {path: "contact", element: <Contact />}
])