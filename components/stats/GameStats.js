import PropTypes, {string} from "prop-types";
import {useEffect} from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function GameStats({stats}) {

	const modeName = stats.modeName
	const headers = stats.header
	const rows = stats.rows
	const background = stats.bg
	const server = stats.svr
	const ip = stats.ip
	const id = 1
	const winnerText = {
		win: stats.victory,
		lose: stats.eliminated
	}
	useEffect(() => {
		document.title = `Game #${id} @ ${server}`
	}, [server]);

	return (
		<body className="stats_body" style={{
			backgroundImage: `url(${background})`,
			backgroundColor: 'rgb(45, 37, 58)',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}}>
		<div>
			<header>
				<div className="mode">
					<p style={{
						textAlign: "center",
						fontWeight: "bold"
					}}>{modeName}</p>
					<p className="ip">{ip}</p>
				</div>
			</header>
			<table>
				<thead>
				<tr>
					{headers.map(v => <TableHead text={v}/>)}
				</tr>
				</thead>
				<tbody>
				{rows.map(v => <TableRow data={v} winnerText={winnerText}/>)}
				</tbody>
			</table>
		</div>
		</body>
	)
}

GameStats.propTypes = {
	fields: PropTypes.arrayOf(string),
	players: PropTypes.object
}

export default GameStats;