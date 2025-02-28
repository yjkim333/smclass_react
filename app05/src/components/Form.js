import React,{useState} from "react";


const Form = ({addMovie}) => {

	const [count,setCount] = useState(4);
	const [no,setNo] = useState(0);
	const [title,setTitle] = useState('');
	const [date,setDate] = useState('');

	const saveBtn = () => {
		alert("영화 정보 저장");
		console.log("번호 : "+count);
		console.log("영화제목 : "+title);
		console.log("날짜 : "+date)

		// 영화정보 저장
		addMovie({no:count,title:title,date:date});

		resetData(); // input 내용 지우기

		setCount(count+1); // db에서 시퀀스로 대체.
	}
	
	// input 내용 지우기
	const resetData = () => {
		setTitle('');
		setDate('');
	}

	return (
		<>
			{/* 추가 수정 삭제 */}
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">영화제목</label>
          <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">날짜</label>
          <input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)} id="exampleInputPassword1"/>
        </div>
        <button type="button" onClick={saveBtn} className="btn btn-primary">영화 정보 저장</button>
      </form>

		</>
	);
}

export default Form;