import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';
import Form from './components/Form';

function App() {

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

  // -- 데이터 삭제 (delete - delete 방식) --
  const deleteMovie = (no) => {
    console.log("삭제데이터 번호 : "+no);
    // 데이터 삭제 => filter() - 해당되는 데이터 return해서 돌려줌
    setMovies(
      movies.filter((movie)=>{
        return(
          movie.no != no
        )
      })
    )
  }

  // -- 데이터 수정 (update - put 방식) --

  // -- 데이터 출력 (select - get 방식) --
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태 구성
  // map() - 반복문 => return해서 값을 돌려줌
  // for문은 return 없이 반복만 함. => hdata해서 html에 넣어야함.
  const mlist = 
  // 삼항식을 사용해서 영화정보 데이터가 없을 때 처리
  movies.length?
  movies.map((movie)=>{
    return(
      <MovieList movie={movie} deleteMovie={deleteMovie} key={movie.no}/>
    );
  })
  :"영화정보 데이터가 없습니다.";

  return ( 
    <div className='main'>
      <h2>영화 정보 리스트</h2>
      <Form addMovie={addMovie} />
      <div>
        {mlist}
      </div>

    </div>
  );
}

export default App;
