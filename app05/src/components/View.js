import React from "react";
import { Link } from "react-router-dom";

const View = ({user}) => {
	return(
		<>
			<div className="card text-center">
			<div className="card-header">
				아이디 : {user.id}
			</div>
			<div className="card-body">
				<h5 className="card-title">Name : {user.name}</h5>
				<p className="card-text">Email : {user.email}</p>
				<Link to="/MemList" className="btn btn-primary">회원 리스트</Link>
			</div>
			<div className="card-footer text-body-secondary">
				회원정보확인
			</div>
		</div>
		</>
	)
}

export default View;