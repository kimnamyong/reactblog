import 도라에몽 from './d5.png';

import "./App.css";

function App() {
  let posts = "강남 고기 맛집";

  function 함수(){
   return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h4>{posts}</h4>
      <h4>{함수()}</h4>      
      <img src="/imgs/d2.png" alt="" />
      <img src={도라에몽} alt="" />
    </div>
  );
}

export default App;
