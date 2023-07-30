import axios from "axios";
import { useEffect, useState } from "react";

export default function Thread() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/chats_sample1").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div className="container justify-content-between col-12 ">
      <div
        className="row col-12"
        style={{ height: "85vh", color: "gray", border: "2px solid #ccc" }}
      >
        {data.map((item) => (
          <div>
            <div className="item-container">
              <div className="item">
                <label>{item.uid}</label>
                <label>{item.icon}</label>
                <label>{item.text}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="row flex justify-content-between align-items-center"
        style={{ height: "5vh" }}
      >
        <div className="col-1 d-flex justify-content-around">
          <i className="fa fa-camera"></i>
          <i className="fa fa-image"></i>
        </div>

        <div className="col-11 d-flex justify-content-evenly">
          <input
            className="col-11"
            type="text"
            placeholder="Type your message here"
          />
          <button
            className="d-flex justify-content-center"
            style={{
              borderRadius: "30px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <label style={{ margin: 0 }}>Send</label>
          </button>
        </div>
      </div>
    </div>
  );
}
