import AuthService from '../../services/auth.service'
import styles from '../../styles/Home.module.css'



function OrderItem({data}) {
    let year, month, day
    if (data) [year, month, day] = data.order.date.split("T")[0].split("-")
    let abc = {
        waiting: "На рассмотрении",
        accepted: "Принято",
        declined: "Отказано"
    }
    let client
    if (data.ids) client = data.ids.find(({ id }) => id === data.order.client_id);
    const statusOnChange = (e) => {
        AuthService.updateOrder(data.order.id, e.target.value)
    }
    return ( 
        <div className={styles.orderItem}>
            <img className={styles.itemImg} src={data.order.vehicle.image}></img>
            <div className={styles.itemList}>
                <h3>{data.order.vehicle.title}</h3>
                <p>Номер заказа: {data.order.id}</p>
                <p>Дата заказа: {day}.{month}.{year}</p>
                {data.type == "admin" && data.ids ? 
                <div className={styles.itemList}>
                <p>Имя: {client.name}</p>
                <p>Фамилия: {client.surname}</p>
                <p>Телефон: {client.phone}</p>
                <p>email: {client.email}</p>
                <select onChange={statusOnChange} name="status" id="status" defaultValue={data.order.status}>
                    <option value="waiting">На рассмотрении</option>
                    <option value="accepted">Принято</option>
                    <option value="declined">Отказано</option>
                </select>
                </div>
                :
                <p>Статус: {abc[data.order.status]}</p>
                }
                <p>Стоимость: <u><b>{(data.order.vehicle.price).toString().split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('')}</b></u> ₽</p>
            </div>
        </div>

     );
}

export default OrderItem;