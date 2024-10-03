import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WorkProgramPage from "./pages/WorkProgramPage/WorkProgramPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/work-program",
    element: <WorkProgramPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
