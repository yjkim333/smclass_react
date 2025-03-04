import React, {useState} from 'react';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import MemberList from '../components/MemberList';
//axios
import axios from 'axios';


const MemList = () => {
  const [users,setUsers] = useState([]);

  // 스프링에서 데이터를 가져와서 출력


  // -- 데이터 출력 (select - get 방식) --
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태 구성
  // map() - 반복문 => return해서 값을 돌려줌
  // for문은 return 없이 반복만 함. => hdata해서 html에 넣어야함.
  const members = 
  // 삼항식을 사용해서 영화정보 데이터가 없을 때 처리
  users.length?
  users.map((user)=>{
    return(
      <MemberList user={user} key={user.id}/>
    );
  })
  :"회원정보 데이터가 없습니다.";
  
  
  // 서버와 통신해서 데이터 가져오기
  // axios.get(스프링에 있는 url 주소 입력)
  // axios.post(스프링에 있는 url 주소 입력)
  // axios.put(스프링에 있는 url 주소 입력)
  // axios.delete(스프링에 있는 url 주소 입력)
  useEffect(
    () => {
      axios.get("http://localhost:8181/mlist2").then(
        response => {
          console.log(response);
          setUsers(response.data);
        }
      )
      axios.get("http://localhost:8181/member/memberList").then(
        response => {
          console.log(response);
          setUsers(response.data);
        }
      )
    },[]
  )


	return(
		<>
			<Nav/>
			<div className='main'>
				<h2>회원 리스트</h2>
				<div>
					{members}
				</div>
			</div>
		</>
	)	
}

export default MemList;