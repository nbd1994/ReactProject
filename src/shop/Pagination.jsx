import React from 'react'

const Pagination = ({productsPerPage, totalProducts, paginate, activePage}) => {
    const pagenumbers = [];
    for(let i = 1;  i<=Math.ceil(totalProducts/productsPerPage); i++){
        pagenumbers.push(i)
    }
  return (
    <ul className='default-pagination lab-ul'>
        <li>
            <a href='#' onClick={()=> {
                if(activePage<pagenumbers.length){
                    paginate(activePage -1)
                }
            }}>
                <i className='icofont-rounded-left'></i>
            </a>
        </li>
        {
            pagenumbers.map((number)=>(
                <li key={number} className={`page-item ${number === activePage ? "bg-waring" : ""}`}>
                    <button onClick={()=>paginate(number)} className='bg-transparent'>{number}</button>
                </li>
            ))
        }
        <li>
            <a href='#' onClick={()=> {
                if(activePage<pagenumbers.length){
                    paginate(activePage +1)
                }
            }}>
                <i className='icofont-rounded-right'></i>
            </a>
        </li>
    </ul>
  )
}

export default Pagination