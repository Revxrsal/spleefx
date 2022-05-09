import PropTypes from "prop-types";
import WinStatus from "./WinStatus";

function TableCell({text, winnerText}) {
    switch (text) {
        case "$WIN":
            return (<WinStatus winner={true} winnerText={winnerText}/>)
        case "$LOSS":
            return (<WinStatus winner={false} winnerText={winnerText}/>)
        default:
            return (<td className="">{text}</td>)
    }
}

TableCell.propTypes = {
    text: PropTypes.string.isRequired,
    winnerText: PropTypes.object.isRequired
}

export default TableCell;