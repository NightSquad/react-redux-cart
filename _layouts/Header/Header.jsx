import styles from "./Header.module.css"
import Link from 'next/link'
import Cart from "./CartModal/Cart";
import { UserOutlined } from "@ant-design/icons";
import AuthService from "../../services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Header() {
    const [user, setUser] = useState()


    useEffect(() => {
        let user = AuthService.getCurrentUser()

        setUser(user)
    }, []);

    const router = useRouter();


    const logOut = () => {
        AuthService.logout()
        router.push("/login")
    }
    // console.log(cartItems)
    return ( 
        <header className={styles.header}>
            <div className={styles.nav}>
                <Link href='/'><h1>Авто мир</h1></Link>
                <div className={styles.buttons}>
                    {/* <Cart/>  */}
                    <Link href='/profile'><button className={styles.profileButton}><UserOutlined/></button></Link>
                    {user ? 
                    <button onClick={logOut} className={styles.logoutButton}>
                        <img src="/exit.svg" alt="" srcSet="/exit.svg" />
                    </button>
                    : ""
                    }   
                </div>
            </div>
        </header>
    );
}

export default Header;