import React, { useState } from 'react';
import Tab from './Tab'
import { PageProp, TabItem } from './types'
import ProfilePage from './Pages/ProfilePage';
// import { ProfilePage, ProjectsPage } from './constants'
import './Book.css';

import GitHubIcon from './assets/icons/github-icon.png'
import LinkedInIcon from './assets/icons/linkedin-icon.png'
import ProfileIcon from './assets/icons/profile-icon.png'
import ProjectsIcon from './assets/icons/projects-icon.png'
import EmailIcon from './assets/icons/email-icon.png'
import CloseIcon from './assets/icons/close-icon.png'

const CLOSE_ACTION = 'close';

const pages = [
  { id: 0, title: "About Me", icon: ProfileIcon, page: ProfilePage},
  { id: 1, title: "Projects", icon: ProjectsIcon, page: ProfilePage}
];

const links = [
    { title: "GitHub", to: "https://github.com/princenewton", icon: GitHubIcon},
    { title: "LinkedIn", to: "https://www.linkedin.com/in/emmy-ricketts-3b3649247/", icon: LinkedInIcon},
    { title: "Email", to:"mailto:ecr10.uk@gmail.com", icon: EmailIcon},
    { title: "Close", to:CLOSE_ACTION, icon: CloseIcon}
];

interface LeftPageProps {
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftPage : React.FC<LeftPageProps> = ({ setIsOpen }) => {

    const [currentPage, updatePage] = useState<React.FC>(() => ProfilePage);

    const PageComponent = currentPage;

    const changeTab = (newPage: TabItem) => {
        if (newPage.page) {
            if (newPage.page !== currentPage) {
                updatePage(newPage.page);
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
                {pages.map(
                    (item, index) => <Tab tabItem={item} onClick={() => changeTab(item)}/>)}
                {links.map(
                    (item, index) => <Tab tabItem={item} onClick={() => changeTab(item)}/>)}
            </div>
            <div className='pageContent'>
                <PageComponent />
            </div>
        </div>
    );
}

export default LeftPage;