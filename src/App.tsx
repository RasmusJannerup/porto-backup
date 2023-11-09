import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lottie from "lottie-react";
import { useLayoutEffect } from "react";
import CustomCursor2 from "./CustomCursor2";
import animationData from "./lotties/scroll-down.json";


function App() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    gsap.to("#second", {
      delay: 4,
      onComplete: () => {
        document.getElementById("second")?.classList.remove("hidden");
        document.getElementById("second")?.classList.add("flex");
      }
    });

    gsap.to("#bar", {
      delay: 0,
      duration: 2,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
      scaleY: 0,
      transformOrigin: "top",
    });
    gsap.to("#overlay", {
      delay: 2.5,
      ease: "power4.inOut",
      scaleY: 0,
      duration: 1.5,
      transformOrigin: "top",
    });

    gsap.fromTo("#scroll-down-animation", {
      opacity: 0,
      y: 0,
    }, {
      delay: 3,
      scrollTrigger: {
        trigger: "#scroll-down-animation",
        toggleActions: "restart pause resume none",
      },
      duration: 3,
      ease: "power4.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo("#char", {
      opacity: 0,
      y: 100,
    }, {
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: "#char",
        toggleActions: "restart pause resume none",
      },
      delay: 1,
      duration: 2,
      ease: "power4.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo("#char2", {
      opacity: 0,
      y: 100,
    }, {
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: "#char2",
        toggleActions: "restart pause resume none",
      },
      delay: 2,
      duration: 2,
      ease: "power4.inOut",
      opacity: 1,
      y: 0,
    });

    const timeline = gsap.timeline();

    timeline.to('#hello', {
      opacity: 0,
      y: 100,
      duration: 2,

    });
    ScrollTrigger.create({
      trigger: '#hello',
      start: 'top 20%', // Adjust this value as needed
      end: 'bottom 20%',
      animation: timeline,
      toggleActions: 'play none none none',
      scrub: 1,
    });

    const timeline2 = gsap.timeline();
    timeline2.to('#imRasmus', {
      opacity: 0,
      y: 100,
      duration: 2,

    });
    ScrollTrigger.create({
      trigger: '#imRasmus',
      start: 'top 30%', // Adjust this value as needed
      end: 'bottom 30%',
      animation: timeline2,
      toggleActions: 'play none none none',
      scrub: 1,
    });

    const timeline3 = gsap.timeline();
    timeline2.to('#scroll-down-animation', {
      opacity: 0,
      y: 140,
      duration: 2,
    });
    ScrollTrigger.create({
      trigger: '#scroll-down-animation',
      start: 'top 40%', // Adjust this value as needed
      end: 'bottom 40%',
      animation: timeline3,
      toggleActions: 'play none none none',
      scrub: 1,
    });

  }, []);


  return (
    <div className="flex flex-col h-full overflow-x-hidden overflow-y-hidden" id="main-body">
      <div className="absolute top-0 z-50 sm:px-16 px-6 flex justify-center items-center w-full h-24 overflow-y-hidden border-b border-black">
        <div className="text-black font-normal sm:w-3/12 w-9/12 font-roboto-condensed tracking-normal">
          RASMUS JANNERUP, NÆSTVED, DENMARK
        </div>
        <nav className="sm:flex hidden sm:w-6/12 items-center justify-center space-x-4 text-black font-bold">

        </nav>
        <div className="sm:w-3/12 w-3/12 flex items-center justify-end">
          <p className="text-black font-light font-roboto-condensed  ml-2">
            &copy;
          </p>
          <p className="text-black font-light font-roboto-condensed  ml-2">
            2023
          </p>
        </div>
      </div>
      <div className='flex relative flex-col w-screen  h-screen bg-[#feefda]'>
        <div className="flex w-screen h-screen absolute px-12">
          <div className="flex flex-col w-full">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="inline-flex sm:text-9xl  text-6xl text-black font-bold font-roboto-condensed sm:mb-10 mb-3" id="hello">
                <p id="char">H</p>
                <p id="char">E</p>
                <p id="char">L</p>
                <p id="char">L</p>
                <p id="char">O</p>
                <p id="char">&nbsp;</p>
                <p id="char">T</p>
                <p id="char">H</p>
                <p id="char">E</p>
                <p id="char">R</p>
                <p id="char">E</p>
              </div>
              <div className="inline-flex sm:text-9xl text-6xl text-black font-bold font-roboto-condensed sm:mb-10 mt-3" id="imRasmus">
                <p id="char2">I</p>
                <p id="char2">'</p>
                <p id="char2">M</p>
                <p id="char2">&nbsp;</p>
                <p id="char2">R</p>
                <p id="char2">A</p>
                <p id="char2">S</p>
                <p id="char2">M</p>
                <p id="char2">U</p>
                <p id="char2">S</p>
              </div>
              <Lottie
                id="scroll-down-animation"
                className="sm:w-32 sm:h-32 w-20 h-20 "
                animationData={animationData}
              />


            </div>


          </div>
        </div>
        <div className="absolute w-screen h-screen z-10" id="overlay">
          <div className="flex relative w-full h-full">
            <div className="bg-black h-full w-1/6" id="bar" />
            <div className="bg-black h-full w-1/6" id="bar" />
            <div className="bg-black h-full w-1/6" id="bar" />
            <div className="bg-black h-full w-1/6" id="bar" />
            <div className="bg-black h-full w-1/6" id="bar" />
            <div className="bg-black h-full w-1/6" id="bar" />
          </div>
        </div>
      </div>
      <div className="h-screen bg-white hidden" id="second">
      </div>
      <CustomCursor2 />
    </div>

  )
}

export default App
