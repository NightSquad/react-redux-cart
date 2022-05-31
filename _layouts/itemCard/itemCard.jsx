import styles from './itemCard.module.css'
import Link from 'next/link'
import { Rate } from 'antd'
import 'antd/lib/rate/style/index.css'
import ToCart from '../UI/addToCartButton';


function ItemCard({data}) {
    return ( 
        <div className={styles.itemCard}>
            <Link href='/items/[id]' as={`/items/${data.id}`}><img src={data.image} alt="" /></Link>
            <Link href='/items/[id]' as={`/items/${data.id}`}><p className={styles.title}>{data.title}</p></Link>
            <div className={styles.price}>
            <div className={styles.rating}>
                <Rate allowHalf disabled defaultValue={data.rating.rate} style={{fontSize: '16px'}}/>
            </div>
            <p>{data.price}$</p>
            <ToCart data={data}/>
            </div>
        </div>
     );
}

export default ItemCard;