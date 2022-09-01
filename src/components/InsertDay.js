// json-server --watch > json-server --watch db/data.json --port 5000

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//axios get/ post갖고 값을 갖고오고 읽기

export default function InsertDay() {
  const navigate = useNavigate();
  const [days, setDays] = useState([]); //useState라는 훅사용
  useEffect(() => {
    axios.get("https://miji-voca-app.herokuapp.com/days").then((res) => {
      setDays(res.data);
    });
  }, []);
  const insertDay = () => {
    axios.post("https://miji-voca-app.herokuapp.com/day/add", { day: days.length + 1 }).then((res) => {
      if (res.data.insert === "ok") {
        alert("day가 추가되었습니다");
        navigate("/");
      }
    });
  };
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">insert day</h2>
        <p className="current">
          currnet day :
          <strong>
            <span className="day">{days.length}</span>
            <span className="unit">day</span>
          </strong>
        </p>
        <div className="btns">
          <button className="btn" onClick={insertDay}>
            add day
          </button>
        </div>
      </div>
    </>
  );
}
