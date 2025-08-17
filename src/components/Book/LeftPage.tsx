import React, { useState } from 'react';
import Tab from './Tab'
import { TabItem } from './types'
import {CLOSE_ACTION, PageObjects, LinkObjects} from './constants'
import './Book.css';
import ProfilePage from './Pages/ProfilePage';
import ProjectsPage from './Pages/ProjectsPage';
import { ProfileDescription } from './Pages/constants';
import ProfilePageExtra from './Pages/ProfilePageExtra';
import ProjectsPageExtra from './Pages/ProjectsPageExtra';



interface LeftPageProps {
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
    currentLeftPage: React.FC;
    setCurrentLeftPage: React.Dispatch<React.SetStateAction<React.FC>>;
    setCurrentRightPage: React.Dispatch<React.SetStateAction<React.FC>>;

}

const LeftPage : React.FC<LeftPageProps> = ({ setIsOpen, currentLeftPage, setCurrentLeftPage, setCurrentRightPage }) => {

    const PageComponent = currentLeftPage;

    const changeTab = (newPage: TabItem) => {
        if (newPage.page) {
            if (newPage.page !== currentLeftPage) {

                if (currentLeftPage == ProfilePage) {
                    setCurrentLeftPage(() => ProjectsPage);
                    setCurrentRightPage(() => ProjectsPageExtra);
                }
                else {
                    setCurrentLeftPage(() => ProfilePage);
                    setCurrentRightPage(() => ProfilePageExtra);
                }
            }
        }
        if (newPage.to) {
            if (newPage.to === CLOSE_ACTION) {
                console.log("CLOSE");
                setIsOpen(false);
            } else {
                window.open(newPage.to, '_blank');
            }
        }
    };


    return (
        <div className="page" id="left-page">
            <div className='navigation'>
                {PageObjects.map(
                    (item, index) => <Tab key={index} tabItem={item} onClick={() => changeTab(item)}/>)}
                {LinkObjects.map(
                    (item, index) => <Tab key={index} tabItem={item} onClick={() => changeTab(item)}/>)}
            </div>
            <div className='pageContent'>
                <PageComponent />
            </div>
        </div>
    );
}

export default LeftPage;