import React,{useState} from "react";

//function Form(){}
const Form = () => {

	const [id,setId] = useState('');
	const [pw,setPw] = useState('');
	
	// function countBtn(){}
	const loginBtn = () =>{
		alert("엔터키 입력");
	}
	const keyPress = (e) =>{
		if(e.keyCode == 13){
			console.log("버튼클릭");
			loginBtn();
		}
	}

	return(
		<>
			<form>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">ID</label>
					<input type="text" value={id} onChange={(e)=>setId(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" value={pw} onChange={(e)=>setPw(e.target.value)}
					 onKeyUp={keyPress} className="form-control" id="exampleInputPassword1"/>
				</div>
				<button type="button" onClick={loginBtn} className="btn btn-primary w-100">Log in</button>
			</form>	
		</>
	);
}

export default Form;