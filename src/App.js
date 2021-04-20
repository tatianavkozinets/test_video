import React from "react";
import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <video
        src="http://d1xcg46xsgz8e.cloudfront.net/2/instructor_repository/4072/1_hr_6_BROWARD_2017.mp4"
        style={{ width: "50%" }}
        controls={true}
      />
      <ReactPlayer
        url="http://d1xcg46xsgz8e.cloudfront.net/2/instructor_repository/4072/1_hr_6_BROWARD_2017.mp4"
        controls={true}
        playsinline={true}
        type="video/mp4"
        config={{
          file: {
            attributes: {
              disablePictureInPicture: true,
              controlsList: "nodownload"
            }
          }
        }}
      />
    </div>
  );
}

export default App;
