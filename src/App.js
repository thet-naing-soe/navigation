import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
// import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import OnlineVideos from "./components/OnlineVideos";
import YouTubeVideos from "./components/YouTubeVideos";
import Language from "./components/Language";
import LangInfo from "./components/LangInfo";

const LazyContactUs = React.lazy(() => import("./components/ContactUs"));
export default function App() {
  return (
    <div className="text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home title={"React Router Home Page"} />} />
        <Route path="/language" element={<Language />}>
          <Route path=":lang" element={<LangInfo />} />
        </Route>
        <Route path="/service" element={<Service />}>
          <Route index element={<OnlineVideos />} />
          <Route path="onlinevideos" element={<OnlineVideos />} />
          <Route path="youtubevideos" element={<YouTubeVideos />} />
        </Route>
        <Route
          path="/contactus"
          element={
            <React.Suspense fallback={"Loading Page..."}>
              <LazyContactUs />
            </React.Suspense>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
