import React from "react";
import './ProfilePage.css';
import DefaultIcon from './assets/default-icon.png';
import HPIcon from './assets/hp-icon.png';
import ACIcon from './assets/ac-icon.png';
import SpeedIcon from './assets/speed-icon.png';
import InitiativeIcon from './assets/init-icon.png';




interface StatProps {
    name: string;
    value?: string;
    icon?: string;
}

const getIcon = (iconName : string) => {
    switch(iconName){
        case 'hp':
            return HPIcon;
        case 'ac':
            return ACIcon;
        case 'speed':
            return SpeedIcon;
        case 'initative':
            return InitiativeIcon;    
        default:
            return DefaultIcon;
    };
}

const StatIcon : React.FC<StatProps> = ({name, value, icon}) => {

    return (
        <div className="stat-item pixel-corners">
            <p>{name}</p>
            <p>{value}</p>
            { icon &&
                <img src={getIcon(icon)}/>}
        </div>
    );
}

export default StatIcon;