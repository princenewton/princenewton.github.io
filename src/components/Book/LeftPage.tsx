import React, { useState } from 'react';
import Tab from './Tab'
import Page from './Page';
import { PageProp, TabItem } from './types'
import { ProfilePage, ProjectsPage } from './constants'
import './Book.css';

import GitHubIcon from './assets/icons/github-icon.png'
import LinkedInIcon from './assets/icons/linkedin-icon.png'
import ProfileIcon from './assets/icons/profile-icon.png'
import ProjectsIcon from './assets/icons/projects-icon.png'
import EmailIcon from './assets/icons/email-icon.png'
import CloseIcon from './assets/icons/close-icon.png'



const pages = [
  { id: 0, title: "About Me", icon: ProfileIcon, page: ProfilePage},
  { id: 1, title: "Projects", icon: ProjectsIcon, page: ProjectsPage}
];

const links = [
    { title: "GitHub", to: "https://github.com/princenewton", icon: GitHubIcon},
    { title: "LinkedIn", to: "https://www.linkedin.com/in/emmy-ricketts-3b3649247/", icon: LinkedInIcon},
    { title: "Email", to:"mailto:ecr10.uk@gmail.com", icon: EmailIcon},
    { title: "Close", to:"close", icon: CloseIcon}
];

const LeftPage = () => {

    const [currentPage, updatePage] = useState<PageProp>(ProfilePage)

    const changeTab = (newPage : TabItem) => {
        if (newPage.page) {
            updatePage(newPage.page);
        }
        else {
            console.log("No page to update");
        }
    }

    return (
        <div className="page" id="left-page">
            <div className='navigation'>
                {pages.map(
                    (item, index) => <Tab tabItem={item} onClick={() => changeTab(item)}/>)}
                {links.map(
                    (item, index) => <Tab tabItem={item} onClick={() => changeTab(item)}/>)}
            </div>
            <div className='pageContent'>
                <Page pageProp={currentPage}/>
            </div>
        </div>
    );
}

export default LeftPage;