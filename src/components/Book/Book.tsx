import React, { useEffect, useState } from "react";
import "./Book.css"
import ClosedBook from "./ClosedBook";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import ProfilePage from "./Pages/ProfilePage";
import ProfilePageExtra from "./Pages/ProfilePageExtra";

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

    const [currentLeftPage, setCurrentLeftPage] = useState<React.FC>(() => ProfilePage);
    const [currentRightPage, setCurrentRightPage] = useState<React.FC>(() => ProfilePageExtra);
    
    const { width: pageWidth } = useWindowSize();
    
    return (
        <div id="bookContainer">
            <div className="book">
                {isOpen ? (
                    <LeftPage setIsOpen={setIsOpen} currentLeftPage={currentLeftPage} setCurrentLeftPage={setCurrentLeftPage} setCurrentRightPage={setCurrentRightPage}/>
                ) : (
                    <div onClick={changeBookState}>
                        <ClosedBook />
                    </div>
                )}
            </div>
            
            {isOpen && pageWidth && pageWidth > 900 && (
                <div className="book">
                    <RightPage currentRightPage={currentRightPage}/>
                </div>
            )}


        </div>
  );
};


export default Book;