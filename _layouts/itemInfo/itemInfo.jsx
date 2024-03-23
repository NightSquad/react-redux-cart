import { useDispatch, useSelector } from 'react-redux';
import styles from './itemPage.module.css'
import { Rate } from 'antd'
import 'antd/lib/rate/style/index.css'

function ItemInfo({itemData}) {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()

    function addToCart() {
        dispatch({type:"ADD_ITEM", data: itemData[0]})
    }

    const removeFromCart = () => {
        dispatch({type: "REMOVE_ITEM", data: itemData[0]})
    }

    return ( 
        <div className={styles.itemContent}>
            <img className={styles.itemImage} src={itemData[0].image} alt=""/>
            <div className={styles.itemDescription}>
                <p className={styles.title}>{itemData[0].title}</p>
                <p className={styles.price}>{(itemData[0].price).toString().split('').reverse().map((el, index) => index % 3 !== 2 ? el : `.${el}`).reverse().join('')} ₽</p>
                <p className={styles.description}>{itemData[0].description}</p>
                <p className={styles.category}>{itemData[0].category}</p>
                <div>
                    <Rate style={{fontSize: '16px'}} allowHalf disabled defaultValue={itemData[0].rating.rate}/> <span> ({itemData[0].rating.count})</span>
                </div>
                <div className={styles.centerButton}>
                    {cartItems.some(el => el.id === itemData[0].id)
                    ? 
                        <button className={styles.addToCart} onClick={removeFromCart}>Remove from cart</button>
                    : 
                        <button className={styles.addToCart} onClick={addToCart}>Оставить заявку.</button>
                    }
                </div>

            </div>
        </div>
     );
}

export default ItemInfo;