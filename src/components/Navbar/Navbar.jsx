import React from "react"
import SearchBox from "../Searchbox/Searchbox"
import Logo from "../Logo/Logo"
import styles from "./Navbar.css"

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <Logo/>
            <SearchBox/>
            <button className="nav-btn">Give Feedback</button>
        </nav>
    )
}

export default Navbar;