import {useEffect} from "react";
import {supabase} from "../components/supabase";

const Login = () => {
	useEffect(() => {
		supabase.auth.signOut().then()
	}, [])
	return <p>Successfully signed out.</p>
}

export default Login;