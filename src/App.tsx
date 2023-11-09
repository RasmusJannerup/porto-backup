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
      delay: 2,
      scrollTrigger: {
        trigger: "#scroll-down-animation",
        toggleActions: "restart pause resume none",
      },
      duration: 2,
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
        trigger: "#char2",
        toggleActions: "restart pause resume none",
      },
      delay: 0.5,
      duration: 2,
      ease: "power4.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo("#char2", {
      opacity: 0,
      y: -100,
    }, {
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: "#char2",
        toggleActions: "restart pause resume none",
      },
      delay: 0.5,
      duration: 2,
      ease: "power4.inOut",
      opacity: 1,
      y: 0,
    });

  }, []);




  return (
    <div className="flex flex-col h-full overflow-x-hidden overflow-y-hidden" id="main-body">
      <div className="absolute top-0 z-50 sm:px-16 px-6 flex justify-center items-center w-full h-24 overflow-y-hidden">
        <div className="text-black font-semibold w-3/12 ">
          RASMUS JANNERUP, NÆSTVED, DENMARK
        </div>
        <nav className="flex w-6/12 items-center justify-center space-x-4 text-black font-bold">
          <a href="#" className="hover:bg-black py-2 px-4 hover:text-white transition-all duration-300 rounded-md">
            <p className="">ABOUT</p>
          </a>
          <a href="#" className="hover:bg-black py-2 px-4 hover:text-white transition-all duration-300 rounded-md">
            <p className="">WORK</p>
          </a>
          <a href="#" className="hover:bg-black py-2 px-4 hover:text-white transition-all duration-300 rounded-md">
            <p className="">CONTACT</p>
          </a>
        </nav>
        <div className="w-3/12 flex items-center justify-end">
          <p>&copy;</p>
          <p className="text-black font-normal ml-2">
            2023
          </p>
        </div>
      </div>
      <div className='flex relative flex-col w-screen  h-screen bg-[#feefda]'>
        <div className="flex w-screen h-screen absolute px-12">
          <div className="flex flex-col w-full">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="inline-flex text-9xl text-black font-bold font-roboto-condensed mb-10" id="hello">
                <p id="char">H</p>
                <p id="char">E</p>
                <p id="char">L</p>
                <p id="char">L</p>
                <p id="char">O</p>
              </div>
              <div className="w-40 h-40 text-blue-300" id="scroll-down-animation">
                <Lottie
                  animationData={animationData}
                  height={25}
                  width={25}
                />
              </div>
              <div className="inline-flex text-9xl text-black font-bold font-roboto-condensed mt-10" id="hello">
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
