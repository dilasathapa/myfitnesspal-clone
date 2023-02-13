import React, { useRef } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {

  // const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  console.log(fileData);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  localStorage.setItem("userImg",JSON.stringify(fileData));
  const handleRead = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setFileData(event.target.result);
    };
    reader.readAsDataURL(file);
    console.log(fileData);
  };
  const imageRef = useRef({
    current:
      "https://i.pinimg.com/236x/39/90/61/3990618993ef1a1d30196fc22f704d22--headshot-photography-men-photography.jpg",
  });

  const handleImage = () => {
    console.log(imageRef.current.value);
  };
  return (
    <>
      <div id='profile-parent'>
        <div id="navbar-bottom">
          <div id="navbar-bottom-section">
            <button> <Link id="link-color" to="/home">Home</Link> </button>
            <button> <Link id="link-color">Goals</Link> </button>
            <button> <Link id="link-color">Check-In</Link> </button>
            <button> <Link id="link-color">Mail</Link> </button>
            <button> <Link id="link-color" to="/profile">Profile</Link> </button>
            <button> <Link id="link-color">Friends</Link> </button>
            <button> <Link id="link-color">Settings</Link> </button>
          </div>

        </div>
        <div id="profile-info">
          <h1>name's profile</h1>
          <div id="info">

            <div id="show-side">
              {/* <img src="" alt="" /> */}
              <div>
                <div id="user-img">
                  {/* <p>No Photo</p>
                                        <p>provided</p>
                                        <input type="file" onChange={handleChange} />
                                        <button onClick={handleRead}>Upload photo</button>
                                        {fileData && <img style={{width:"100%", border:"1px  solid"   }} src={fileData} alt="name" />} */}
                  {/* <button onClick={handleRead}>Upload photo</button> */}
                  {/* <img src="" style={{border:"2px solid green"}} alt="name-name" /> */}
                  {fileData && <img src={fileData} style={{ width: "100%", height: "250px", borderRadius: "4px" }} alt="name" />}



                </div>
              </div>
              <div id="details">
                <p>name</p>
                <p>gender</p>
                <p>Member since February 4, 2023</p>
                <button className="edit-profile">EDIT PROFILE</button> <br />

                <input type="file" onChange={handleChange} />
                <button className="edit-photo" onClick={handleRead}>Upload Photo</button>

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

  )
}
export default Profile;

