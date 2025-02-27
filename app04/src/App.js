import './App.css';
import MovieList from './components/MovieList';

function App() {

  // json 데이터, 배열객체
  const movies = [
    {no:1,title:"해리포터 1",date:"2020-01-01"},
    {no:2,title:"해리포터 2",date:"2023-04-01"},
    {no:3,title:"해리포터 3",date:"2028-08-01"},
  ]

  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태 구성
  // map() - 반복문 => return해서 값을 돌려줌
  // for문은 return 없이 반복만 함. => hdata해서 html에 넣어야함.
  const mlist = movies.map((movie)=>{
    return(
      <div className="card">
        <h5 className="card-header">영화정보_{movie.no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary mt">update</a>
          <a href="#" className="btn btn-primary">delete</a>
        </div>
      </div>
    );
  });

  return (
    <div className='main'>
      <h2>게시판</h2>
      {mlist}

      {/* <div className="card">
        <h5 className="card-header">영화정보 {movies[0].no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movies[0].title}</h5>
          <p className="card-text">{movies[0].date}</p>
          <a href="#" className="btn btn-primary mt">update</a>
          <a href="#" className="btn btn-primary">delete</a>
        </div>
      </div> */}
      

      {/* <MovieList uBtn="update" dBtn="delete"/>
      <MovieList uBtn="변경" dBtn="지우기"/>
      <MovieList/> */}
    </div>
  );
}

export default App;
