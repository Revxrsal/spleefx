import PropTypes from "prop-types";

function TableHead({text}) {
    return (
        <th className="text-blue-400 bg-gray-700 p-2 text-center font-bold">{text}</th>
    )
}

TableHead.propTypes = {
    text: PropTypes.string.isRequired
}

export default TableHead;