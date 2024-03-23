import Head from 'next/head'
import { useState } from 'react'
import { Provider } from 'react-redux'
import cartReducer from '../Reducers/cartReducer'
import styles from '../styles/Home.module.css'
import Header from '../_layouts/Header/Header'
import ItemCard from '../_layouts/itemCard/itemCard'
import ListItem from '../_layouts/listItem/ListItem'


export default function Home({itemData}) {

  const [viewType, setViewType] = useState('container')

  const handleChange = (e) => {
    setViewType(e.target.id)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={cartReducer}>
      <Header/>
      <main className={styles.main}>
        <div className={styles.viewType}>
          <input type='radio' name='viewType' checked={viewType === 'container' ? true : false} id='container' onChange={handleChange}></input>
          <label className={styles.containerButton} htmlFor='container'></label>
          <input type='radio' name='viewType' id='list' checked={viewType === 'list' ? true : false} onChange={handleChange}></input>
          <label className={styles.listButton} htmlFor='list'></label>
        </div>
        {viewType === 'container'
        ?
          <div className={styles.itemsContainer}>
            {itemData.map(item => <ItemCard key={item.id} data={item}></ItemCard>)}
          </div>
        :
          <div className={styles.itemsList}>
            {itemData.map(item => <ListItem key={item.id} data={item}></ListItem>)}
          </div>
        }
      </main>
      </Provider>
    </div>
  )
}

export async function getServerSideProps() {
  let response = await fetch('http://localhost:3000/api/items')
  let itemData = await response.json()

  // let cart = await fetch('http://localhost:3000/api/cart')
  // let cartData = await cart.json()

  return {
    props: {itemData}
  }
} 