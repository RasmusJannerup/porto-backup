import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

export const Second = () => {

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const timeline = gsap.timeline();
        const innerHeight = window.innerHeight;
        timeline.fromTo('#about-me', {
            opacity: 0,
            x: 100 + "%",
        }, {
            opacity: 1,
            x: 0,
        });
        ScrollTrigger.create({
            trigger: '#about-me',
            start: "20% top",
            end: `+=${innerHeight}`,
            animation: timeline,
            scrub: true,
            markers: true,
        });

    }, [])

    return <div className="h-screen bg-[#007663] relative hidden" id="second">
        <div className="flex flex-col">
            <div className="flex flex-row w-full p-10 sm:text-10xl font-bold text-6xl text-[#feefda]" id="about-me">
                ABOUT ME
            </div>
            <div className="flex flex-col">
                aiosjdoiajsdoijaoisd
            </div>
        </div>

    </div>
}