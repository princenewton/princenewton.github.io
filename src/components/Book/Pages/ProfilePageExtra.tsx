import BlockItem from "./BlockItem";
import StatItem from "./StatItem";
import { dndInfo, dndSpells, StatList } from "./constants";

const ProfilePageExtra = () => {

    return (
        <div id='profile-extra'>
            <div id='profile-extra-content'>
                <div id='stats'>
                    {StatList.map((item, index) =>
                    <StatItem name={item.name} value={item.value} />)}
                </div>
                <div id='character-info'>
                    <BlockItem title='Info' description={dndInfo}/>
                    <BlockItem title="Spells" description={dndSpells}/>
                </div>
            </div>         
        </div>
    );
}

export default ProfilePageExtra;