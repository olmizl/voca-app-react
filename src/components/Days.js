import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Days() {
  const [days, setDays] = useState([]);
  //state가 변경될때마다 감지를해서 실행한다.
  useEffect(() => {
    axios.get("https://miji-voca-app.herokuapp.com/days").then((res) => {
      setDays(res.data);
    });
  }, []);
  // 상태변수를 넣어주면 그게 바뀔때마다 useEffect를 실행한다
  return (
    <>
      <div className="container">
        <ul className="days">
          {days.map((item, idx) => {
            return (
              <li>
                <Link to={`/day/${item.day}`}>day{item.day}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="deleteBtn">
        <button>Delete Day</button>
      </div> */}
    </>
  );
}
