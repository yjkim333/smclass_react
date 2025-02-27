import React from 'react';

// prop - 변수 2개
// => prop 변수를 {}으로 분해해서 받을 수 있음 
// => const MovieList = ({uBtn,dBtn}) => : 분해해서 바로 변수로 받을 수 있음.
const MovieList = (prop) => {
	// 삼항식 사용 => 조건?true:false
	const uBtn = prop.uBtn?prop.uBtn:"수정";
	const dBtn = prop.dBtn?prop.dBtn:"삭제";
	return(
		<>
			<div className="card">
        <h5 className="card-header">영화정보</h5>
        <div className="card-body">
          <h5 className="card-title">해리포터</h5>
          <p className="card-text">2020-01-01</p>
          <a href="#" className="btn btn-primary mt">{uBtn}</a>
          <a href="#" className="btn btn-primary">{dBtn}</a>
        </div>
      </div>
		</>
	);
}

export default MovieList;