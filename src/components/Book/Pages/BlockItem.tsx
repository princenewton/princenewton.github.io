import React from "react";
import './ProfilePage.css';
import DefaultIcon from './assets/default-icon.png';
import LikeIcon from './assets/like-icon.png';
import DislikeIcon from './assets/dislike-icon.png';
import NameIcon from './assets/name-icon.png';
import JobIcon from './assets/job-icon.png';
import LocationIcon from './assets/location-icon.png';
import DescIcon from './assets/desc-icon.png';

interface BlockProps {
    title: string;
    description?: string;
    icon?: string;
}

const getIcon = (iconName : string) => {
    switch(iconName){
        case 'name':
            return NameIcon;
        case 'desc':
            return DescIcon;
        case 'job':
            return JobIcon;
        case 'location':
            return LocationIcon;
        case 'like':
            return LikeIcon;
        case 'dislike':
            return DislikeIcon;
        default:
            return DefaultIcon;
    };
}

const BlockItem : React.FC<BlockProps> = ({title, description, icon}) => {

    const blockIcon = icon ? getIcon(icon) : DefaultIcon;

    return (
        <div className="block-item pixel-corners">
            <div className="block-header">
                <img src={blockIcon}/>
                <p id='block-title'>{title}</p>
            </div>
            <div className="block-content">
                {
                description &&
                <p>{description}</p>
            }
            </div>
        </div>
    );
}

export default BlockItem;