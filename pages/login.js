import {useEffect} from "react";
import {supabase} from "../components/supabase";

const Login = () => {
	useEffect(() => {
		supabase.auth.signIn({
			provider: "github"
		}).then()
	}, [])
	return <p>Logging in...</p>
}

export default Login;