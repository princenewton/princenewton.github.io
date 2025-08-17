import BlockItem from "./BlockItem";
import StatItem from "./StatItem";
import { dndInfo, dndSpells, ExtraStats, featuresAndTraits, StatList } from "./constants";

const ProfilePageExtra = () => {

    return (
        <div id='profile-extra'>
            <div id='profile-extra-content'>
                <div id='stats'>
                    {StatList.map((item, index) =>
                    <StatItem name={item.name} value={item.value} />)}
                </div>
                <div id='character-info'>
                    <BlockItem title='Level 5 Human Wizard' icon="name"/>
                    <div id='extra-stats'>
                        {ExtraStats.map((item, index) =>
                        <StatItem name={item.name} value={item.value} />)}
                    </div>
                    <div id='extra-text-content'>
                        <BlockItem title="Spells" description={dndSpells} icon="book"/>
                    </div>
                    <div id='featuresAndTraits'>
                        {featuresAndTraits.map((item, index) =>
                            <BlockItem title={item.title} description={item.description} />)}
                    </div>  
                </div>              
            </div>         
        </div>
    );
}

export default ProfilePageExtra;