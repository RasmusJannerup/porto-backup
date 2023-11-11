import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Second = () => {

    gsap.registerPlugin(ScrollTrigger);

    // useLayoutEffect(() => {

    // }, [])

    return <div className="h-screen bg-[#007663] hidden" id="second">
    </div>
}