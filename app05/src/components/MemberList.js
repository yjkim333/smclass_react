import React from 'react';
import { Link } from 'react-router-dom';

// props - 변수 2개 => 구조분해
// => props 변수를 {}으로 분해해서 받을 수 있음 
// => const MovieList = ({uBtn,dBtn}) => : 분해해서 바로 변수로 받을 수 있음.
const MemberList = ({user}) => {

	return(
		<>

			<div className="card">
        <h5 className="card-header">회원_{user.id}</h5>
        <div className="card-body">
          <h5 className="card-title">
						<Link to={`/MemView/${user.id}`}>{user.name}</Link>
					</h5>
          <p className="card-text">{user.email}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a className="btn btn-primary">삭제</a>
        </div>
      </div>
		</>
	);
}

export default MemberList;