// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {supabase} from "../../components/supabase";

export default async function handler(req, res) {
	const {id} = req.query
	if (id) {
		const v = await supabase.from("debug")
			.select("*")
			.eq("id", id)
			.limit(1)
			.single()
		if (v.body)
			res.status(200).json(v.body.content)
		else
			res.status(v.status).json(v)
	}
}
