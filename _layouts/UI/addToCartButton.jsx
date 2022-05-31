import styles from './addToCartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'; 
import { ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons';

function ToCart({data}) {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()

    const addToCart = async () => {
        dispatch({type: "ADD_ITEM", data})
    }

    const removeFromCart = async () => {
        dispatch({type: "REMOVE_ITEM", data})
    }

    return ( 
        <div>
            {cartItems.some(el => el.id === data.id) 
                ? <button onClick={removeFromCart} className={styles.shopCart}><CheckOutlined /></button>
                : <button onClick={addToCart} className={styles.shopCart}><ShoppingCartOutlined/></button>
            } 
        </div>

    );
}

export default ToCart;