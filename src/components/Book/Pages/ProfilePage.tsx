import React from "react";
import AvatarIcon from './../assets/avatar.png';
import './ProfilePage.css';
import BlockItem from "./BlockItem";

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div id="row-container">
                <div id='avatar-container'>
                    <img id='avatar-icon' src={AvatarIcon}/>
                    {/* <BlockItem title="PRONOUN?" /> */}
                </div>
                <div id="bio-container" className="container">
                    <div className="block-wrapper">
                        <BlockItem title="NAME" icon="name" />
                        <BlockItem title="TITLE" icon="job" />
                        <BlockItem title="LOCATION" icon="location" />
                    </div>
                </div>
            </div>
            <div id="column-container" className="container">
                <div id="desc-container" className="container">
                    <BlockItem title="DESC" icon="desc"/>
                </div>
                <div id="likes-dislikes-container" className="container">
                    <BlockItem title="LIKES" icon="like"/>
                    <BlockItem title="DISLIKES" icon="dislike" />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;