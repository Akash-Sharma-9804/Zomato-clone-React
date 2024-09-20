import React from 'react'
import './topbrandlist.css'

const TopBrandsList = ({brand}) => {
  return (
    <div>
       <div className='topbrand-item-cover'>
        <img src={brand.cover}  className='topbrand-item-img' alt={brand.title} />
     
    </div>
    <div className='topbrand-item-title'>{brand.title}</div>
    <div className='topbrand-item-time'>{brand.time}</div>
    </div>
  )
}

export default TopBrandsList
