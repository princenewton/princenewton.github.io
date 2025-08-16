import AvatarIcon from './../assets/avatar.png';
import './ProfilePage.css';
import BlockItem from "./BlockItem";
import { ProfileDescription, LikesDescription, DislikesDescription } from './constants';

const ProfilePage: React.FC = () => {
    return (
        <div className="profile-page">
            <div id="row-container">
                <div id='avatar-container'>
                    <img id='avatar-icon' src={AvatarIcon}/>
                    {/* <BlockItem title="PRONOUN?" /> */}
                </div>
                <div id="bio-container" className="container">
                    <div className="block-wrapper">
                        <BlockItem title="Emilia (Emmy)" icon="name" />
                        <BlockItem title="CS Student" icon="job" />
                        <BlockItem title="University of St Andrews" icon="location" />
                    </div>
                </div>
            </div>
            <div id="column-container" className="container">
                <div id="desc-container">
                    <BlockItem title="DESC" icon="desc" description={ProfileDescription}/>
                </div>
                <div id="likes-dislikes-container">
                    <BlockItem title="LIKES" icon="like" description={LikesDescription}/>
                    <BlockItem title="DISLIKES" icon="dislike" description={DislikesDescription} />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;