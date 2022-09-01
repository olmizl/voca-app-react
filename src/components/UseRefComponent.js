import { useState, useRef } from "react";

export default function UseRefComponent() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  let varCount = 0;

  const incCount = () => {
    setCount(count + 1);
  };
  const incVarCount = () => {
    varCount++;
  };
  const incRefCount = () => {
    refCount.current++;
  };

  return (
    <>
      <div>
        <p style={{ color: "#fff", fontSize: 30 }}>{count}</p>
        <button style={{ padding: 20 }} onClick={incCount}>
          UseState로 만드는 counter
        </button>
      </div>
      <div>
        <p style={{ color: "#fff", fontSize: 30 }}>{varCount}</p>
        <button style={{ padding: 20 }} onClick={incVarCount}>
          일반변수로 만드는 counter
        </button>
      </div>
      <div>
        <p style={{ color: "#fff", fontSize: 30 }}>{refCount.current}</p>
        <button style={{ padding: 20 }} onClick={incRefCount}>
          useRef로 만드는 counter
        </button>
      </div>
    </>
  );
}
