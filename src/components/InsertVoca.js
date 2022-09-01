import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertVoca() {
  //react에서 dom에 접근할때는 useRef라는훅을 사용한다
  const [days, setDays] = useState([]);
  const navigate = useNavigate();

  const eng = useRef();
  const kor = useRef();
  const day = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(eng.current.value, kor.current.value, day.current.value);
    axios
      .post(`https://miji-voca-app.herokuapp.com/add`, {
        day: parseInt(day.current.value),
        eng: eng.current.value,
        kor: kor.current.value,
        isDone: false,
      })
      .then((res) => {
        // console.log("입력되었습니다");
        alert("입력되었습니다");
        if (res.data.insert === "ok") {
          navigate(`/day/${day.current.value}`);
        }
      });
  };
  useEffect(() => {
    axios.get(`https://miji-voca-app.herokuapp.com/days`).then((res) => {
      setDays(res.data);
    });
  }, []);

  return (
    <>
      {/* 여기에 영어단어, 한국어 뜻 입력하는 거 폼만들기 */}
      <div className="container dayBox">
        <h2 className="title">INSERT VOCA</h2>
        <form className="vocaBox" onSubmit={onSubmit}>
          <div className="inputBox">
            <label>ENG</label>
            <input type="text" name="" id="" placeholder="write english ex) dog" ref={eng} />
          </div>
          <div className="inputBox">
            <label>KOR</label>
            <input type="text" name="" id="" placeholder="뜻을 적으세요 ex) 강아지" ref={kor} />
          </div>
          <div className="inputBox">
            <select name="" id="" ref={day}>
              {/* option태그를 반복하는곳  */}
              {days.map((item, idx) => {
                return (
                  <option value={item.day} key={idx}>
                    {item.day}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btns">
            <button className="btn">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
