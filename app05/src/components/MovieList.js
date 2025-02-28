import React from 'react';

// props - 변수 2개 => 구조분해
// => props 변수를 {}으로 분해해서 받을 수 있음 
// => const MovieList = ({uBtn,dBtn}) => : 분해해서 바로 변수로 받을 수 있음.
const MovieList = ({movie, deleteMovie}) => {
	// 삼항식 사용 => 조건?true:false
	//console.log(movie);

	const deleteBtn = () => {
		alert(movie.no+"번 영화정보를 삭제합니다.");
		deleteMovie(movie.no); // 삭제처리
	}

	return(
		<>

			<div className="card">
        <h5 className="card-header">영화정보_{movie.no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
        </div>
      </div>
		</>
	);
}

export default MovieList;