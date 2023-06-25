import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Vending Machine</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className={styles.body_container}>
				<button type="submit" className={styles.green_btn}>
					Scan QR
				</button>
				<h2 className={styles.limit}> Limit: 5</h2>
			</div>
		</div>
	);
};

export default Main;
