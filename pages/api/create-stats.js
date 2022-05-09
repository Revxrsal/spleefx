import {supabase} from "../../components/supabase";

export default async function handler(req, res) {
	const content = req.body.content
	const response = await supabase.from("stats")
		.insert({
			content: content
		})
	res.status(200).json({
		id: response.data[0].id
	})
}