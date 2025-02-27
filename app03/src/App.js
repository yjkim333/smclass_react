import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {

	const [id,setId] = useState('');
	const [pw,setPw] = useState('');
	const [count,setCount] = useState(0);
	const [count2,setCount2] = useState(0);

	// useEffect()
	// => 화면이 리로딩이 되면 실행되는 함수(set~ 이 돌때도 자동으로 리로딩이 됨.)
	// => 최초 데이터를 가져와서 화면에 출력할 때 실행
	// => 특정 변수가 변경 시 명령어를 실행해야 할 때 사용
	useEffect(
		()=>{
			console.log("useEffect 실행 - useState 변수 상관 없이 실행");
		}
	);
	useEffect(
		()=>{
			console.log("useEffect => 증가된 count : "+count);
		},[count] // 특정 변수에 실행
	);
	useEffect(
		()=>{
			console.log("useEffect => 증가된 count2 : "+count2);
		},[count2]
	);
	useEffect(
		()=>{
			console.log("처음 한 번만 실행!");
		},[] // 아무것도 안넣으면 처음 한 번만 실행
	);

	const countBtn = () => {
		// alert("카운트 증가");
		setCount(count+1);
	}
	const count2Btn = () => {
		// alert("카운트 증가");
		setCount2(count2+1);
	}

	return (
		<div className='main'>
			<h2>게시판</h2>
			<div className='idTxt'>
				ID : {id}<br/>
				PW : {pw}<br/>
				Count : {count}
			</div>
			<button onClick={countBtn}>카운트 증가</button>
			<br/>
			<div className='idTxt'>
				Count2 : {count2}
			</div>
			<button onClick={count2Btn}>카운트2 증가</button>
			<Form/>
		</div>
	);
}

export default App;
