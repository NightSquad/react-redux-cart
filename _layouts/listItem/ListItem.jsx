import styles from './ListItem.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { Rate } from 'antd';
import 'antd/lib/rate/style/index.css'
import ToCart from '../UI/addToCartButton';


function ListItem({data}) {
    return ( 
        <div className={styles.item}>
            <Link href='/items/[id]' as={`/items/${data.id}`}><a><img src={data.image} alt="" /></a></Link>
            <div className={styles.itemDescription}>
                <Link href='/items/[id]' as={`/items/${data.id}`}><a className={styles.title}>{data.title}</a></Link>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.bottomSection}>
                    <div className={styles.rating}>
                        <Rate allowHalf disabled defaultValue={data.rating.rate} style={{fontSize: '16px'}}/>
                        <span>{data.rating.count}</span>
                    </div>
                    <div className={styles.priceSection}>
                        <p className={styles.price}>{data.price}$</p>
                        <ToCart data={data}/>   
                    </div>
             
                </div>
            </div>
        </div>
     );
}

export default ListItem;