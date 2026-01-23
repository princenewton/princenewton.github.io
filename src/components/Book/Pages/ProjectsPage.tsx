import React from 'react';
import { ProjectBlockItems } from './constants';
import BlockItem from './BlockItem';
import './Page.css';

const ProjectsPage: React.FC = () => {
    return (
        <div id='projects-page' className='page'>
            <div className='column-container'>
                <h1 id='title'>Projects</h1>
                <div className='block-wrappper'>
                    {ProjectBlockItems.map((item, index) =>
                        <BlockItem
                            title={item.title}
                            description={item.description}
                            icon={item.icon} />)}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
