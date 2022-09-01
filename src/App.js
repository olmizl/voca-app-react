import "./css/layout.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Days from "./components/Days";
import Day from "./components/Day";
import InsertDay from "./components/InsertDay";
import InsertVoca from "./components/InsertVoca";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseRefComponent from "./components/UseRefComponent";

//리액트에서는 a태그 사용 X
// routing을 위해 react-router-dom을 npm install react-router-dom을 통해 설치해서 쓴다
// App 전체를 BrowserRouter로 감싸고 링크걸어서 바뀌는 곳은 Routes 안에 Route로 만들어서 사용
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UseRefComponent /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/insert/day" element={<InsertDay />} />
          <Route path="/insert/voca" element={<InsertVoca />} />
          <Route path="/day/:day" element={<Day />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
