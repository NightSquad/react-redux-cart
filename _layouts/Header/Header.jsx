import styles from "./Header.module.css"
import Link from 'next/link'
import Cart from "./CartModal/Cart";
import { UserOutlined } from "@ant-design/icons";

function Header() {
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