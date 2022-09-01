import axios from "axios";
import { useEffect, useState } from "react";

export default function Voca(props) {
  const [info, setInfo] = useState(props);

  const [isVisible, setIsVisible] = useState(true);

  const [isDone, setIsDone] = useState(props.isDone);

  const toggleKor = () => {
    setIsVisible(!isVisible);
  };

  const toggleDone = () => {
    //axios 갖고올때는 = get -> read
    // 처음생성 & 변화 = post -> create
    //axios .post ()-> update
    //axios .post ()-> delete
    axios
      .put(`https://miji-voca-app.herokuapp.com/voca/${props.id}`, {
        isDone: !isDone,
      })
      .then((res) => {
        if (res.data.update === "OK") {
          console.log("수정됨");
          setIsDone(!isDone);
        }
      });
  };
  const deleteVoca = () => {
    if (window.confirm("다 외웠나요? ")) {
      axios.delete(`https://miji-voca-app.herokuapp.com/voca/${props.id}`).then((res) => {
        if (res.data.delete === "OK") {
          setInfo({ id: -1 });
          //db에서 값을 지웠다는 결과를 받았기 떄문에 -1을 세팅하고 아래쪽에서return false를 통해화면에서 랜더링 안되게 만듦
        }
      });
    }
  };

  if (info.id === -1) {
    return false;
  }
  return (
    <li className={isDone ? "done" : ""} data-idx={props.id}>
      <div className="check">
        <label className="checkBox">
          <input type="checkbox" onChange={toggleDone} />
          <span className="label"></span>
        </label>
      </div>
      <div className="eng word">{props.eng}</div>
      <div className="kor word">{isVisible && props.kor}</div>
      <div className="btns">
        <button className="btn hidden" onClick={toggleKor}>
          HIDDEN
        </button>
        <button className="btn del" onClick={deleteVoca}>
          DEL
        </button>
      </div>
    </li>
  );
}
