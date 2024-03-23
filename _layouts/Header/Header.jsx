import styles from "./Header.module.css"
import Link from 'next/link'
import Cart from "./CartModal/Cart";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

function Header() {
    const cartItems = useSelector(state => state)
    // console.log(cartItems)
    return ( 
        <header className={styles.header}>
            <div className={styles.nav}>
                <Link href='/'><h1>Next Shop</h1></Link>
                <div className={styles.buttons}>
                    {/* <Cart/>  */}
                    <Link href='/profile'><button className={styles.profileButton}><UserOutlined/></button></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;