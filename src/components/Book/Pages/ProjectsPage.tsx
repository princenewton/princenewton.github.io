import React from 'react';
import { ProjectBlockItems } from './constants';
import BlockItem from './BlockItem';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
    return (
        <div id='projects-page'>
            <h1 id='title'>Projects</h1>
            <div>
                {ProjectBlockItems.map((item, index) =>
                    <BlockItem
                        title={item.title}
                        description={item.description}
                        icon={item.icon} />)}
            </div>
        </div>
    );
};

export default ProjectsPage;
