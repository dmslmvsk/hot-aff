import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout.tsx";
import HomePage from "./pages/home-page.tsx";
import AboutPage from "./pages/about-page.tsx";
import AdvertisersPage from "./pages/advertisers-page.tsx";
import ContactPage from "./pages/contact-page.tsx";
import PublishersPage from "./pages/publishers-page.tsx";

// Создаем маршруты
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>404 not found</div>,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "advertisers", element: <AdvertisersPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "publishers", element: <PublishersPage /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
