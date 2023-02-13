import React, { useRef } from "react";
import "./Profile.css";

function Profile() {
  const imageRef = useRef({
    current:
      "https://i.pinimg.com/236x/39/90/61/3990618993ef1a1d30196fc22f704d22--headshot-photography-men-photography.jpg",
  });

  const handleImage = () => {
    console.log(imageRef.current.value);
  };
  return (
    <>
      <div id="profile-parent">
        <div id="profile-info">
          <h1>name's profile</h1>
          <div id="info">
            <div id="show-side">
              {/* <img src="" alt="" /> */}
              <div>
                <div id="user-img">
                  <img src={imageRef.current.value} alt="pic" width="100px" />
                  <p>No Photo</p>
                  <p>provided</p>
                  <input type="file" ref={imageRef} />
                  <button onClick={handleImage}>Upload photo</button>
                </div>
              </div>
              <div id="details">
                <p>name</p>
                <p>gender</p>
                <p>Member since February 4, 2023</p>
                <button className="edit-profile">EDIT PROFILE</button> <br />
                <button className="edit-photo">EDIT PHOTOS</button>
              </div>
            </div>
          </div>
          <div id="bottom-info">
            <div id="about">
              <h3>About Me:</h3>
              <p>
                {" "}
                <i>I haven't filled this out yet.</i>{" "}
              </p>
              <h3>Why I want to get in shape</h3>
              <p>
                {" "}
                <i>I haven't filled this out yet.</i>{" "}
              </p>
              <h3>My Inspirations</h3>
              <p>
                <i>I haven't filled this out yet.</i>
              </p>
              <h3>Friends</h3>
              <p>
                <i>name does not have any friends yet.</i>
              </p>
            </div>
            <div id="newsfeed">
              <div>
                <h3>NEWS FEED</h3>
              </div>
              <div>
                <textarea
                  placeholder="What's on your mind?"
                  id="textarea"
                  rows="3"
                ></textarea>
                <div>
                  <button className="share-button">Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
