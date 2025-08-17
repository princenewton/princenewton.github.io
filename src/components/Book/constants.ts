import GitHubIcon from './assets/icons/github-icon.png'
import LinkedInIcon from './assets/icons/linkedin-icon.png'
import ProfileIcon from './assets/icons/profile-icon.png'
import ProjectsIcon from './assets/icons/projects-icon.png'
import EmailIcon from './assets/icons/email-icon.png'
import CloseIcon from './assets/icons/close-icon.png'
import ProfilePageExtra from './Pages/ProfilePageExtra';
import ProfilePage from './Pages/ProfilePage'
import ProjectsPage from './Pages/ProjectsPage'

export const PageObjects = [
  { id: 0, title: "About Me", icon: ProfileIcon, page: ProfilePage, extrapage: ProfilePageExtra},
  { id: 1, title: "Projects", icon: ProjectsIcon, page: ProjectsPage, extrapage: ProfilePage}
];

export const CLOSE_ACTION = 'close';

export const LinkObjects = [
    { title: "GitHub", to: "https://github.com/princenewton", icon: GitHubIcon},
    { title: "LinkedIn", to: "https://www.linkedin.com/in/emmy-ricketts-3b3649247/", icon: LinkedInIcon},
    { title: "Email", to:"mailto:ecr10.uk@gmail.com", icon: EmailIcon},
    { title: "Close", to:CLOSE_ACTION, icon: CloseIcon}
];