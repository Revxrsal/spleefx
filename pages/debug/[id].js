import {useRouter} from "next/router";
import RedirectPage from "../../components/RedirectPage";

function DebugPage() {
	const router = useRouter()
	const {id} = router.query
	return (
		<RedirectPage url={`/api/debug?id=${id}`}/>
	)
}

export default DebugPage;