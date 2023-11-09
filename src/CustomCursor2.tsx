import { useEffect, useState } from "react";

const CustomCursor2: React.FC = () => {
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            const scrollPositionY = window.scrollY;
            var scrollPositionYwithUpdatedCursor = scrollPositionY + y;

            setTargetPosition({ x, y: scrollPositionYwithUpdatedCursor });
        };



        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);


    const lerp = (start: number, end: number, t: number) => {
        return start * (1 - t) + end * t;
    };

    const moveCursorWithDelay = () => {
        const delay = 0.05; // Adjust the delay as needed
        const newX = lerp(position.x, targetPosition.x, delay);
        const newY = lerp(position.y, targetPosition.y, delay);
        setPosition({ x: newX, y: newY });
    };

    useEffect(() => {
        requestAnimationFrame(moveCursorWithDelay);
    }, [targetPosition, position]);

    return (
        <div
            className="custom-cursor overflow-hidden bg-transparent border-4 border-black border-opacity-30 rounded-full absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
            style={{
                left: `${position.x}px`, top: `${position.y}px`, width: 40, height: 40,
            }}
        ></div>
    );
};

export default CustomCursor2;