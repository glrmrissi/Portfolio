import { useEffect, useRef, useState } from "react";


const TopBtn = () => {
    const btnTopRef = useRef<HTMLButtonElement | null>(null);
    const [showBtn, setShowBtn] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY >= 10);
        }

        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scroll({top: 0})
    }

    return (
        <>
            <button
            ref={btnTopRef}
            onClick={scrollToTop}   
            style={{
                visibility: showBtn ? "visible" : "hidden",
                opacity: showBtn ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
                position: "fixed",
                bottom: "20px",
                right: "15px",
                padding: "10px 15px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                zIndex: 1000
              }} 
            >
                ^
            </button>
        </>
    )
}
export default TopBtn;