import React, {useState} from 'react';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';

const MemWrite = () => {
	// json 데이터, 배열객체, 
  // 일반변수는 새로고침을 해야 화면에 적용
  // useState 변수는 자동으로 화면에 적용
  // useEffect 사용해서 db에서 데이터 가져와서 movies에 저장
  const [movies,setMovies] = useState(
    [
      {no:3,title:"해리포터 3",date:"2028-08-01"},
      {no:2,title:"해리포터 2",date:"2023-04-01"},
      {no:1,title:"해리포터 1",date:"2020-01-01"},
    ]
  );


  // -- 데이터 추가 (insert - post 방식) --
  const addMovie = (movie) => {
    //setMovies(movie); // => 기존 데이터 모두 지우고 최종데이터만 새로 입력
    setMovies([movie,...movies,]); // => 기존 데이터 에 이어서 저장(구조분해할당)
  }

	return(
		<>
			<Nav/>
			<div className='main'>
				<h2>영화 정보 작성</h2>
				<Form addMovie={addMovie} />
			</div>
		</>
	)	
}

export default MemWrite;