import React from 'react'
import Data from "../products.json"
const ShopCategory = ({filterItem,setItem,menuItems,setProducts,SelectedCategory}) => {
  return (
    <>
        <div className='widget-header'>
            <h5 className='ms-2'>All Categories</h5>
        </div>
        <div>
            <button onClick={()=>setProducts(Data)} className={`m-2 ${SelectedCategory==="All" ? "bg-warning" : ""}`}>All</button>
            {
                menuItems.map((val,id) => {
                    return (
                        <button className={`m-2 ${SelectedCategory=== val ? "bg-warning" : ""}`}
                        key={id}
                        onClick={()=>filterItem(val)}>{val}</button>
                    )
                })
            }
        </div>   
    </>
  )
}

export default ShopCategory
