import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <>
            <div id='profile-parent'>
                <div id="profile-info">
                    <div id="info">
                        <h1>name's profile</h1>
                        <div id="show-side">
                            <img src="" alt="" />
                            <div id="details">
                                <p>name</p>
                                <p>gender</p>
                                <p>Member since February 4, 2023</p>
                                <button className="edit-profile">EDIT PROFILE</button> <br />
                                <button className="edit-photo">EDIT PHOTOS</button>
                            </div>
                        </div>
                        <div id="bottom-info">
                            <div id="about">
                                <h3>About Me:</h3>
                                <p> <i>I haven't filled this out yet.</i> </p>
                                <h3>Why I want to get in shape</h3>
                                <p> <i>I haven't filled this out yet.</i> </p>
                                <h3>My Inspirations</h3>
                                <p><i>I haven't filled this out yet.</i></p>
                                <h3>Friends</h3>
                                <p><i>name does not have any friends yet.</i></p>
                            </div>
                            <div id="newsfeed">
                                <div>
                                    <h3>NEWS FEED</h3>
                                </div>
                                <div>
                                    <textarea placeholder="What's on your mind?" id="textarea" rows="3"></textarea>
                                    <div>
                                        <button className="share-button">Share</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}
export default Profile;