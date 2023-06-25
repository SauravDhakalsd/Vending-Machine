import styles from "./styles.module.css";
import { useState, useEffect } from 'react'
import Scanner from './Scanner'

const Main = () => {
	const getInitialLimit = () => {
		const storedLimit = localStorage.getItem("limit");
		if (storedLimit) {
			return parseInt(storedLimit);
		} else {
			localStorage.setItem("limit", 5);
			return 5;
		}
	};

	const [showqr, setShowqr] = useState(false);
	const [limit, setLimit] = useState(getInitialLimit());

	const resetLimit = () => {
		const today = new Date();
		const isFirstDateOfMonth = today.getDate() === 1;

		if (isFirstDateOfMonth) {
			setLimit(5);
			localStorage.setItem("limit", 5);
		}
	};

	useEffect(() => {
		resetLimit();
	}, []);

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
				{!showqr && (
					<button
						type="submit"
						className={styles.green_btn}
						onClick={() => setShowqr(true)}
						disabled={limit === 0}
					>
						Scan QR
					</button>

				)}
				{showqr && (
					<Scanner
						onScanSuccess={() => {
							const newLimit = limit - 1;
							setLimit(newLimit);
							localStorage.setItem("limit", newLimit);
						}}
					/>

				)}
				<h2 className={styles.limit}> Limit: {limit}/month</h2>
			</div>
		</div>
	);
};

export default Main;
