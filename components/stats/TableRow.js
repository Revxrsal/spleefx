import PropTypes, {string} from "prop-types";
import TableCell from "./TableCell";

function TableRow({data, winnerText}) {
    return (
        <tr>
            {data.map(v => (<TableCell text={v} winnerText={winnerText}/>))}
        </tr>
    )
}

TableRow.propTypes = {
    data: PropTypes.arrayOf(string).isRequired,
    winnerText: PropTypes.object.isRequired
}

export default TableRow;