import React from "react";
import './ProfilePage.css';
import DefaultIcon from './assets/default-icon.png';



interface StatProps {
    name: string;
    value?: string;
    icon?: string;
}

const getIcon = (iconName : string) => {
    switch(iconName){
        default:
            return DefaultIcon;
    };
}

const StatIcon : React.FC<StatProps> = ({name, value, icon}) => {

    const statIcon = icon ? getIcon(icon) : DefaultIcon;

    return (
        <div className="stat-item pixel-corners">
            <p>{name}</p>
            <p>{value}</p>
            <img src={statIcon}/>
        </div>
    );
}

export default StatIcon;