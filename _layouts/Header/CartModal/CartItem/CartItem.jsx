import styles from './CartItem.module.css'
import { CloseOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useDispatch } from 'react-redux'

function CartItem({data}) {
    const dispatch = useDispatch()

    const removeHandler = async () => {
        dispatch({type: "REMOVE_ITEM", data})
    }

    return ( 
        <div className={styles.CartItem}>
            <img src={data.image} alt="" width={50} height={50} />
            <div style={{width: '80%'}}>
                <p>{data.title}</p>
                <p>{data.price}$</p>
            </div>
            <CloseOutlined className={styles.removeButton} onClick={removeHandler}/>
        </div>
     );
}

export default CartItem;