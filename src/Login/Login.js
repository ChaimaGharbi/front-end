import React, { useEffect, useState } from "react";
import "./Login.css"

const Login = () => {

	const [popupStyle, showPopup] = useState("hide")

	const popup = () => {
		showPopup("login-popup")
		setTimeout(() => showPopup("hide"), 3000)
	}

	return (
		<div className="page">
			<div className="cover">
				<h1>Login</h1>
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />

				<div className="login-btn" onClick={popup}>Login</div>
				<div className="login-btn" href="#">Sign up</div>
				<div className={popupStyle}>
					<h3>Login Failed</h3>
					<p>Username or password incorrect</p>
				</div>

			</div>
		</div>
	)
}

export default Login