import 도라에몽 from "./d5.png";

import "./App.css";
import { useState } from "react";

function App() {
  let posts = "강남 고기 맛집";
  let [글제목, 글제목변경]=useState(["남자코드추천","강남우동맛집"])
  console.log(글제목)
  // function 함수() {
  //   return 100;
  // }
  // let style1 = {
  //   border: "2px solid blue",
  //   color: "red",
  //   backgroundColor: "yellow",
  // };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "gold", fontSize: "30px" }}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>2월26일 발생</p>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월26일 발생</p>
      </div>

      {/* <h4 style={style1}>{posts}</h4>
      <h4>{함수()}</h4>      
      <img src="/imgs/d2.png" alt="" />
      <img src={도라에몽} alt="" /> */}
    </div>
  );
}

export default App;
