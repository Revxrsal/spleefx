import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {supabase} from "../../components/supabase";
import GameStats from "../../components/stats/GameStats";

function StatsPage() {
	const router = useRouter()
	const {id} = router.query
	const [content, setContent] = useState()
	useEffect(() => {
		async function fetchData() {
			const v = await supabase.from("stats")
				.select("content")
				.eq("id", id)
				.limit(1)
				.single()
			if (v.body)
				setContent(JSON.parse(v.body.content))
		}
		fetchData();
	}, [id])
	return (id &&
		(<div className="stats_container">
			{content ? (<GameStats stats={content}></GameStats>) : (<h1>Please wait...</h1>)}
		</div>)
	)
}

export default StatsPage;