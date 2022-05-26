import styles from './itemCard.module.css'
import { ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons';
import Link from 'next/link'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';


function ItemCard({data}) {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()

    const addToCart = async () => {
        dispatch({type: "ADD_ITEM", data})
    }

    const removeFromCart = async () => {
        dispatch({type: "REMOVE_ITEM", data})
    }

    return ( 
        <div className={styles.itemCard}>
            <Link href='/items/[id]' as={`/items/${data.id}`}><img src={data.image} alt="" /></Link>
            <Link href='/items/[id]' as={`/items/${data.id}`}><p className={styles.title}>{data.title}</p></Link>
            <div className={styles.price}>
            <p>{data.price}$</p>
            {cartItems.some(el => el.id === data.id) 
                ? <button onClick={removeFromCart} className={styles.shopCart}><CheckOutlined /></button>
                : <button onClick={addToCart} className={styles.shopCart}><ShoppingCartOutlined/></button>
            }
            </div>
        </div>
     );
}

export default ItemCard;