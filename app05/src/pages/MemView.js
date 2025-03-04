import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // parameter 값을 받음
import axios from 'axios';
import Nav from '../components/Nav';
import View from '../components/View';


const MemView = () => {

  const [users,setUsers] = useState([]);
  const params = useParams();
  console.log("useParams : "+params.id);
  useEffect(
    () => {
      axios.get(`http://localhost:8181/member/memberView?id=${params.id}`).then(
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
				<h2>회원 상세 정보</h2>
        <div>
          <View user={users}/>
        </div>
			</div>
		</>
	)	
}

export default MemView;