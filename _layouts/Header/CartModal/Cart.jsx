import styles from './Cart.module.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';

function Cart() {
    let cartItems = useSelector(state => state)
    const [modalVisible, setModalVisible] = useState(false)
    let TotalPrice = 0;
    cartItems.length > 0 ? cartItems.forEach(el => TotalPrice += el.price) : <></>

    function test() {
        setModalVisible(!modalVisible)
        console.log(cartItems)
    }

    return ( 
        <div className={styles.Cart}>
            <span className={styles.count}>{cartItems.length}</span>
            <button className={styles.cartButton} onClick={test}><ShoppingCartOutlined style={{cursor: 'pointer'}}/></button>
            {modalVisible ? <div className={styles.Modal}>
            {cartItems.length > 0 
            ? 
            <div className={styles.cartItems}>
                {cartItems.map(item => <CartItem key={item.id + Math.floor(Math.random() * 1000)} data={item}/>)}
                <span>{`Cумма: ${TotalPrice.toFixed(2)}$`}</span>
                <button className={styles.paymentButton}>Оплатить</button>
            </div>
            : <p className={styles.empty}>Корзина пуста</p>}
            </div> : <></>}
        </div>
     );
}

export default Cart;