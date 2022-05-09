import styles from "../styles/Home.module.css";
import PropTypes from "prop-types";

const HomeBlock = ({link, name, description}) => {
	return (
		<a href={link} className={styles.card}>
			<h2>{name} &rarr;</h2>
			<p>{description}</p>
		</a>
	)
}

HomeBlock.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default HomeBlock;