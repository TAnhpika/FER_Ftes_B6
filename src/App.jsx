import Header from "./components/shadcn-studio/blocks/hero-section-01/header";
import HeroSection from "./components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import HeroSection41 from "./components/shadcn-studio/blocks/hero-section-41/hero-section-41";

import Footer from "./components/shadcn-studio/blocks/footer-component-01/footer-component-01";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/shadcn-studio/blocks/login-page-01/login-page-01";
import ChangelogContent from "./components/shadcn-studio/blocks/timeline-component-05/timeline-component-05";
import V1_1_0_Content from "./components/shadcn-studio/blocks/timeline-component-05/content/v1-1-0";
import V1_2_0_Content from "./components/shadcn-studio/blocks/timeline-component-05/content/v1-2-0";
import V1_3_0_Content from "./components/shadcn-studio/blocks/timeline-component-05/content/v1-3-0";

const releases = [
    { version: "v1.3.0", date: "May 20, 2026", content: <V1_3_0_Content /> },
    { version: "v1.2.0", date: "Apr 15, 2026", content: <V1_2_0_Content /> },
    { version: "v1.1.0", date: "Mar 10, 2026", content: <V1_1_0_Content /> },
];
const navigationData = [
    { title: "Home", href: "/" },
    { title: "Change logs", href: "/changelog" },
    { title: "Pricing", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
];

const menudata = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
        imgAlt: "Grilled Steak",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
        userComment: "The best steak I've ever had! Perfectly seasoned.",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        imgAlt: "Fresh Salad",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        userComment: "Fresh ingredients and amazing flavors every time.",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=400&fit=crop",
        imgAlt: "Pasta Delight",
        userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        userComment: "This pasta is to die for! Will definitely come back.",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop",
        imgAlt: "Dessert Special",
        userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        userComment: "The desserts here are absolutely divine!",
    },
];

function App() {
    return (
        <>
            <BrowserRouter>
                <Header navigationData={navigationData} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <HeroSection />
                                <HeroSection41 menudata={menudata} />
                            </>
                        }
                    />
                    <Route
                        path="/changelog"
                        element={<ChangelogContent releases={releases} />}
                    />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
