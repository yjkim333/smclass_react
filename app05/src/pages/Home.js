import React, {useState} from 'react';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';
import i17_1 from '../images/17_1.jpg';

const Home = () => {
	
	return(
		<>
			<Nav/>
			<div className='home'>
					<h2>Home</h2>	
				<div className='img'>
					<img src={`${process.env.PUBLIC_URL}/images/17.jpg`}/>
				</div>
				<div className='bg'>
					<img src={i17_1}/>
				</div>
			</div>
		</>
	)	
}

export default Home;