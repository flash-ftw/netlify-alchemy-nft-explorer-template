import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
			
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
