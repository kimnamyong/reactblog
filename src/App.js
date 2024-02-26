import 도라에몽 from "./d5.png";

import "./App.css";
import { useState } from "react";

function App() {
  // let posts = "강남 고기 맛집";
  // destructuring 문법
  let [글제목, 글제목변경] = useState([
    "남자코드추천",
    "강남우동맛집",
    "파이션독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  function 제목바꾸기() {
    // 글제목변경(["제목1","제목2","제목3"])
    // deep Copy 깊은복사
    var newArray = [...글제목];
     newArray[0]="여성복 맞춤";
     newArray[1]="남성복 맞춤";
     newArray[2]="리액트 공부";
     글제목변경(newArray)     
  }

  function 정렬하기(){
   var newArray=[...글제목];
   const sortArray=newArray.sort();
   글제목변경(sortArray)   
  }

  //  console.log(글제목);
  // function 함수() {
  //   return 100;
  // }
  // let style1 = {
  //   border: "2px solid blue",
  //   color: "red",
  //   backgroundColor: "yellow",
  // };
  let [modal,modal변경]=useState(false)

  let [누른제목, 누른제목변경]=useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "gold", fontSize: "30px" }}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>글제목변경 </button>
      <button onClick={정렬하기}>정렬하기 </button>
     
      <hr></hr>

    {
      글제목.map((a,i)=>{
       return(
        <div className="list" key={i}>
          <h3 onClick={()=>{누른제목변경(i)}}>
           {a}
          <span onClick={() => 따봉변경(따봉 + 1)}> 👍 </span>
          {따봉}
          </h3>
          <p>2월26일 발생</p>
        </div>
       )
      })
     }
     <hr></hr>
     <button onClick={()=>modal변경(!modal) }>모달창 </button>
     <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
     <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
     <button onClick={()=>{누른제목변경(2)}}>버튼3</button>      
    {modal===true ? 
    <Modal 글제목={글제목} 누른제목={누른제목} /> : null  } 

      {/* <div className="list">
        <h3>
          {글제목[1]}
          <span onClick={() => 따봉변경(따봉 + 1)}> 👍 </span>
          {따봉}
        </h3>
        <p>2월26일 발생</p>
      </div>
      <div className="list">
        <h3>{글제목[2]}
        <span onClick={() => 따봉변경(따봉 + 1)}> 👍 </span>
          {따봉}
        </h3>
        <p>2월20일 발생</p>
      </div> */}
    

    </div>
  );
} // app

function Modal({글제목,누른제목}){
 return(
  <div className="modal">
   <h2>{글제목[누른제목]}</h2>
   <p>날짜</p>
   <p>상세내용</p>
  </div>
 )
}

export default App;
