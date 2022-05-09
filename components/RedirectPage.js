import {useEffect} from "react";
import styles from "../styles/Home.module.css";
import PropTypes from "prop-types";

function RedirectPage({url}) {
	useEffect(() => {
		window.location.href = url
	})
	return (
		<div className={styles.container}>
			<h1 className={styles.title} style={{
				padding: 100
			}}>Redirecting...</h1>
		</div>
	)
}

RedirectPage.propTypes = {
	url: PropTypes.string.isRequired
}

export default RedirectPage;