import axios from "axios";
import { useEffect, useState } from "react";
import "./thread.css";

export default function Thread() {
  const [data, setData] = useState([]);
  const [userUID, setUserUID] = useState("uid1");
  const [userData, setUserData] = useState({
    uid: userUID,
    icon: "https://tukuru-co.com/product/sample/b.jpg",
    text: "",
  });

  useEffect(() => {
    axios.get("http://localhost:4000/chats_sample1").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({ ...data, [name]: value }));
  };

  const handleSave = () => {
    if (userData.text !== "") {
      console.log(userData);
    }
  };

  const handleReturn = () => {
    console.log("Return");
  };

  const handleCamera = () => {
    console.log("Accessing camera.");
  };
  const handleGallery = () => {
    console.log("Accessing camera.");
  };

  return (
    <div className="container col-12">
      <div className="message-div row col-12 flex justify-content-between align-items-center ">
        <div className=" back-button col-1 flex justify-content-end">
          <button className="icon-button" onClick={handleReturn}>
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <div className="show-chat row col-11 ">
          {data.map((item, index) =>
            userUID === item.uid ? (
              <div
                key={index}
                className="reverseOrder row col-12 align-items-center"
              >
                <div className="reverse-speech-bubble col-10 col-lg-11">
                  {item.text}
                </div>
                <div className="col-2 col-lg-1">
                  <img className="icon-container " src={item.icon} alt="Icon" />
                </div>
              </div>
            ) : (
              <div key={index} className="order row col-12 align-items-center">
                <div className="col-4 col-xs-2  col-sm-2 col-md-2 col-lg-1">
                  <img className="icon-container " src={item.icon} alt="Icon" />
                </div>
                <div className="speech-bubble col-10 col-lg-11">
                  {item.text}
                </div>
              </div>
            )
          )}
        </div>
        <div className="user-input row col-12 d-flex justify-content-between align-items-center">
          <div className="col-1"></div>
          <div className="col-10 col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-flex justify-content-evenly">
            <button className="icon-button">
              <i className="fa fa-2x fa-camera"></i>
            </button>
            <button className="icon-button">
              <i className="fa fa-2x fa-image"></i>
            </button>
          </div>

          <div className="col-12 col-xs-9 col-sm-9 col-md-9 col-lg-10 col-xl-10 col-xxl-10 d-flex  justify-content-evenly">
            <input
              className="col-10"
              type="text"
              placeholder="Type your message here"
              id="text"
              name="text"
              value={userData.text}
              onChange={handleChange}
            />
            <button
              className="custom-button d-flex justify-content-center"
              onClick={handleSave}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
