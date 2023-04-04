import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import { isMobile } from "react-device-detect";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Education from "../components/Home/Education";
import Loading from "../components/Loader/Loader";
import Projects from "../components/Home/Projects";
import Gallery from "../components/Home/Gallery";
import { Switch } from "@nextui-org/react";
import { FaSun, FaRegMoon } from "react-icons/fa";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [ShowElement, setShowElement] = useState(false);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
    setTimeout(() => {
      setShowElement(true);
    }, 0);

    // 10400 below is for the "about me section"

    // INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 3100);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
    if (isMobile) {
      isMobile && setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // For dark mode
  const [theme, setTheme] = useState("");

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    //add or remove class dark in html elem according to theme in localstorage.
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const meta = {
    title: "Douglas Tjokrosetio",
    description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
    image: "/site-icon.jpg",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://douglastjokro.com`} />
        <link rel="canonical" href={`https://douglastjokro.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Douglas Tjokrosetio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <link rel="icon" href={meta.image} />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <div
          className={`relative snap-mandatory bg-AAprimary dark:bg-DarkbgColor min-h-screen  w-full `}
        >
          <div className="absolute top-20 right-6 md:top-24 md:right-12">
            {isMobile ? (
              <Switch
                squared
                size={"lg"}
                bordered
                color="primary"
                checked={theme === "dark"}
                icon={theme == "light" ? <FaRegMoon /> : <FaSun />}
                onChange={handleThemeSwitch}
              />
            ) : (
              <Switch
                squared
                size={"xl"}
                bordered
                color="primary"
                checked={theme === "dark"}
                icon={theme == "light" ? <FaRegMoon /> : <FaSun />}
                onChange={handleThemeSwitch}
              />
            )}
          </div>
          <Header
            finishedLoading={context.sharedState.finishedLoading}
            sectionsRef={homeRef}
          />
          <MyName finishedLoading={context.sharedState.finishedLoading} />
          <SocialMediaArround
            finishedLoading={context.sharedState.finishedLoading}
          />
          {context.sharedState.finishedLoading ? (
            <AboutMe ref={aboutRef} />
          ) : (
            <></>
          )}
          {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context.sharedState.finishedLoading ? <Education /> : <></>}
          {context.sharedState.finishedLoading ? <Projects /> : <></>}
          {context.sharedState.finishedLoading ? <Gallery /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer githubUrl={""} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}
