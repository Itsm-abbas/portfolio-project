import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
export default function Home() {
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
    }, 1000);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("Portfolio Rendered...");
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
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
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
        {context.sharedState.finishedLoading ? (
          <Footer githubUrl={""} hideSocialsInDesktop={true} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
