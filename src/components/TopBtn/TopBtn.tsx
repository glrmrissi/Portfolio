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
            tabIndex={0}
            title="Button for top"
            ref={btnTopRef}
            onClick={scrollToTop}   
            style={{
                visibility: showBtn ? "visible" : "hidden",
                opacity: showBtn ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
                position: "fixed",
                bottom: "20px",
                right: "15px",
                padding: "10px 12px",
                backdropFilter: "blur(10px)",
                backgroundColor: "#1a1a1a67",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                zIndex: 1000
              }
            } 
            >
            <i className="bi bi-chevron-up fa-xa"></i>
            </button>
        </>
    )
}
export default TopBtn;