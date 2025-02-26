import React,{useState} from 'react';// react 변수 사용
import './App.css';

function App() {
  
  let name = '홍길동';
  const [ename,setEname] = useState('유관순');
  const [a,setA] = useState('');

  const [id,setId] = useState('');
  const [pw,setPw] = useState('');

  const btn = () => {
    alert("함수버튼 클릭");
    // javascript, ajax 로 데이터 넣는 방법
    name = '이순신';
    document.getElementById("d01").innerText=name;
    console.log(name);

    // react useState 사용으로 데이터 넣기
    setEname('신사임당');
  }

  const loginBtn = () => {
    alert("로그인 진행중..");
  }
  
  const pwBtn = (e) => {
    console.log("pw inputbox 글을 입력합니다.");
    // enter 키가 들어오면 로그인 버튼 클릭하도록 구현
    if(e.keyCode == 13){
      //alert("엔터키 입력됨");
      loginBtn();
    }
  }

  return (
    <div className='main'>
      <h2>게시판</h2>
      <div id='d01'>{name}</div>
      <div>react : {ename}</div>
      <br/>
      <label for='id'>아이디</label>
      <br/>
      <input type='text' id='id' name='id' className='id' placeholder='ID 입력' onChange={(event) => {setId(event.target.value)}} value={id}/>
      <br/>
      <label for='id'>비밀번호</label>
      <br/>
      <input type='text' id='pw' name='pw' className='pw' onKeyUp={pwBtn}  placeholder='PW 입력' onChange={(event)=>{setPw(event.target.value)}} value={pw}/>
      <br/>
      <button className='loginBtn' onClick={loginBtn}>login</button>
      <br/>
      <br/>

      <button onClick={()=>{alert("버튼클릭")}}>변경</button>
      <button onClick={(btn)}>변경</button>
      {/* 자바스크립트 - onclick,onchang,onkeyup / react - onClick,onChange,onKeyUp */}

      
      {/* return 안 주석문 */}
      {/* if문은 사용불가 => 삼항식 사용 */}
      {/* <div>
        {name=='홍길동'?(<h3>홍길동입니다.</h3>):(<h3>홍길동이 아닙니다.</h3>)}
      </div> */}
    </div>
  );
}

export default App;
