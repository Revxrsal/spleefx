import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeBlock from "../components/HomeBlock";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SpleefX</title>
				<meta name="description" content="An advanced, powerful, customizable engine for spleef-like games"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>SpleefX</h1>

				<p className={styles.description}>
					An advanced, powerful, customizable engine for spleef-like games
				</p>
				<div className={styles.grid}>
					<HomeBlock name="Wiki"
										 description="Find in-depth guides about SpleefX"
										 link="https://github.com/SpleefX/SpleefX/wiki"
					/>
					<HomeBlock name="Support"
										 description="Join the Discord server for quick support"
										 link="https://discord.gg/uwf72ZN"
					/>
					<HomeBlock name="Get"
										 description="Get the plugin from SpigotMC"
										 link="https://www.spigotmc.org/resources/73093/"
										 props={{
											 width: 633.5,
											 maxWidth: 633.5
										 }}
					/>
				</div>
			</main>
		</div>
	)
}
