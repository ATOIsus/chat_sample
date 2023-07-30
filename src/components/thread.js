import axios from "axios";
import { useEffect, useState } from "react";
import "./thread.css";

export default function Thread() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/chats_sample1").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div className="container col-12">
      <div
        className="row flex justify-content-between align-items-center col-12 "
        style={{ padding: "10px", height: "84vh" }}
      >
        <div
          className="col-1 flex justify-content-end"
          style={{ height: "84vh" }}
        >
          <button style={{ border: "none", background: "transparent" }}>
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <div
          className="row col-11 "
          style={{ height: "84vh", border: "2px solid #ccc", overflow: "auto" }}
        >
          {data.map((item) => (
            <div
              key={item.uid}
              className="row col-12 align-items-center"            >
              <div className="col-2 col-lg-1">
                <img
                className="icon-container "
                  src={item.icon}
                  alt="Icon"
                />
              </div>
              <div className="speech-bubble col-10 col-lg-11">{item.text}</div>
            </div>
          ))}
        </div>
        <div
          className="row flex justify-content-between align-items-center"
          style={{ height: "5vh" }}
        >
          <div className="col-1"></div>
          <div className="col-1 d-flex justify-content-around">
            <button style={{ border: "none", background: "transparent" }}>
              <i className="fa fa-camera"></i>
            </button>
            <button style={{ border: "none", background: "transparent" }}>
              <i className="fa fa-image"></i>
            </button>
          </div>

          <div className="col-10 d-flex justify-content-evenly">
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
    </div>
  );
}
