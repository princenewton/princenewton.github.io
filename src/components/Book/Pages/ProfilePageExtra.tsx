import BlockItem from "./BlockItem";
import StatItem from "./StatItem";
import './Page.css';
import {  dndSpells, ExtraStats, featuresAndTraits, StatList } from "./constants";

const ProfilePageExtra = () => {

    return (
        <div id='profile-extra' className="row-container extraPage page">
                <div id='stats' className="column-container">
                    {StatList.map((item, index) =>
                    <StatItem name={item.name} value={item.value} />)}
                </div>
                <div id='character-info' className="column-container">
                    <BlockItem title='Level 5 Human Wizard' icon="name"/>
                    <div id='extra-stats' className="row-container">
                        {ExtraStats.map((item, index) =>
                        <StatItem name={item.name} value={item.value} />)}
                    </div>
                    <div id='extra-text-content'>
                        <BlockItem title="Spells" description={dndSpells} icon="book"/>
                    </div>
                    <div id='featuresAndTraits' className="block-wrapper">
                        {featuresAndTraits.map((item, index) =>
                            <BlockItem title={item.title} description={item.description} />)}
                    </div>  
                </div>              
        </div>
    );
}

export default ProfilePageExtra;