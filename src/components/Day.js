import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Voca from "./Voca";

export default function Day() {
  const { day } = useParams(); //useParams Hook은 상단 네비게이션의 params값을 받을 때 쓴다
  const [voca, setVoca] = useState([]);
  //queryString방식으로 들고옴
  useEffect(() => {
    axios.get(`https://miji-voca-app.herokuapp.com/voca/${day}`).then((res) => {
      setVoca(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day-{day}</h2>
        <ul className="vocas">
          {voca.map((item, idx) => {
            return <Voca kor={item.kor} eng={item.eng} isDone={item.isDone} key={idx} id={item.id} day={item.day} />;
          })}
        </ul>

        <div className="btns">
          <Link to="/" className="btn">
            BACK
          </Link>
        </div>
      </div>
    </>
  );
}
