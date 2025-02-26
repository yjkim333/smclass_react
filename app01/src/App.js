import logo from './logo.svg';
import './App.css';
import './css/style.css'; // css 파일 import

function App() {
  const css01 = {
    textAlign:'center',
    backgroundColor : '#efdefe',
    height:'100px',
    fontWeight:800,
    fontSize:'50px',
  }
  return (
    <div className="App">
      <h2>로그인</h2>
      <div style={css01} className='d01'>aaa</div>
      <button>확인</button>
    </div>
  );
}

export default App;
