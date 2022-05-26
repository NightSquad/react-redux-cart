import { useDispatch, useSelector } from 'react-redux';
import styles from './itemPage.module.css'
import { StarFilled } from "@ant-design/icons"

function ItemInfo({itemData}) {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()

    let arr = []
    for (let i=0; i<5; i++) {
        let checked;
        i<Math.floor(itemData[0].rating.rate) ? checked = true : checked = false;
        let obj = {i, checked}
        arr.push(obj)
    }

    function addToCart() {
        dispatch({type:"ADD_ITEM", data: itemData[0]})
    }

    const removeFromCart = () => {
        dispatch({type: "REMOVE_ITEM", data: itemData[0]})
    }

    return ( 
        <div className={styles.itemContent}>
            <img src={itemData[0].image} alt="" width={500} height={700}/>
            <div className={styles.itemDescription}>
                <p className={styles.title}>{itemData[0].title}</p>
                <p className={styles.price}>{itemData[0].price}$</p>
                <p className={styles.description}>{itemData[0].description}</p>
                <p className={styles.category}>{itemData[0].category}</p>
                <p>{arr.map(el => el.checked ? <StarFilled key={Math.floor(Math.random() * 1000)} style={{color: "#fcba03"}} /> : <StarFilled key={Math.floor(Math.random() * 1000)} style={{color: 'gray'}}/>)}  ({itemData[0].rating.count})</p>
                {cartItems.some(el => el.id === itemData[0].id) ? 
                  <button className={styles.addToCart} onClick={removeFromCart}>Remove from cart</button>
                : <button className={styles.addToCart} onClick={addToCart}>Add to Cart</button>}
            </div>
        </div>
     );
}

export default ItemInfo;