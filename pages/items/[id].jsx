import { useState } from "react";
import Header from "../../_layouts/Header/Header";
import cartReducer from "../../Reducers/cartReducer";
import { Provider } from "react-redux";
import ItemInfo from "../../_layouts/itemInfo/itemInfo";

function ItemPage({itemData}) {
    return ( 
        <div>
            <Provider store={cartReducer}>
            <Header/>
            <ItemInfo itemData={itemData}/>
            </Provider>
        </div> 
    );
}

export default ItemPage;

export async function getServerSideProps({query}) {
    let response = await fetch(`http://localhost:3000/api/items?id=${query.id}`)
    let itemData = await response.json()
    return {
      props: {itemData}
    }
  } 