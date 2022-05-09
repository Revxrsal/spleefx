import PropTypes from "prop-types";

function WinStatus({winner, winnerText}) {
    const className = "win-status " + (winner ? "winner" : "loser")
    return (
        <td className={className}>
            {winner ? winnerText.win : winnerText.lose}
        </td>
    )
}

WinStatus.propTypes = {
    winner: PropTypes.bool.isRequired,
    winnerText: PropTypes.object.isRequired
}

export default WinStatus;