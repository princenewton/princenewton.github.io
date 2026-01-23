import AvatarIcon from './../assets/avatar.png';
import './Page.css';
import BlockItem from "./BlockItem";
import { ProfileDescription, LikesDescription, DislikesDescription } from './constants';

const ProfilePage: React.FC = () => {
    return (
        <div id="profile-page" className='page column-container'>
            <div id="first-container" className='row-container'>
                <div id='avatar-container' className='pixel-corners--wrapper'>
                    <img id='avatar-icon' alt='Pixelated version of the author, with blonde hair and glasses' src={AvatarIcon}/>
                    {/* <BlockItem title="PRONOUN?" /> */}
                </div>
                <div id="bio-container" className="block-wrapper">
                    <BlockItem title="Emilia (Emmy)" icon="name" />
                    <BlockItem title="CS Student" icon="job" />
                    <BlockItem title="University of St Andrews" icon="location" />
                </div>
            </div>
            <div id="second-container" className="column-container">
                <div id="desc-container">
                    <BlockItem title="DESC" icon="desc" description={ProfileDescription}/>
                </div>
                <div id="likes-dislikes-container" className='block-wrapper'>
                    <BlockItem title="LIKES" icon="like" description={LikesDescription}/>
                    <BlockItem title="DISLIKES" icon="dislike" description={DislikesDescription} />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;