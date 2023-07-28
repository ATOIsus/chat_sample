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
    <div>
      <div className="container">
        <div className="row">
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
      </div>
    </div>
  );
}
