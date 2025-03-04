import React from "react";
import { Link } from "react-router-dom";
// react에서 class => className
// Router에선 a태그 => Link , href => to
const Nav = () => {
	return(
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">Home</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/mList">영화리스트</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/#">영화정보추가</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/#">영화상세보기</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/MemList">회원리스트</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/MemWrite">회원정보추가</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/MemView">회원상세보기</Link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav;