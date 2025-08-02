import React, { useEffect, useState } from "react";
import "./Book.css"
import ClosedBook from "./ClosedBook";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined as number | undefined,
        height: undefined as number | undefined,
    });


    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowSize;

};

const Book = () => {

    const [isOpen, setIsOpen] = useState(false);
    const changeBookState = () => setIsOpen(true);


    const { width: pageWidth } = useWindowSize();
    
    return (
        <div id="bookContainer">
            <div className="book" onClick={changeBookState}>
                {isOpen ? <LeftPage /> : <ClosedBook />}
            </div>
            
            {isOpen && pageWidth && pageWidth > 900 && (
                <div className="book">
                    <RightPage />
                </div>
            )}


        </div>
  );
};


export default Book;