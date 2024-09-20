import React from 'react'
import './Delivery.css'
import Filters from '../common/Filters/Filters'
import DeliveryCollection from './Delivery Collections/DeliveryCollection'
import TopBrands from './Top brands/TopBrands'
import ExploreSection from '../common/Explore section/ExploreSection'
import { restaurants } from '../../data/Restaurants'

const deliveryFilters= [
    {
        id:1,
        icon: <i class="fi fi-rr-settings-sliders"></i>,
        title:"Filters",
    },
    {
        id:2,
        
        title:"Rating: 4.0+",
    },
    {
        id:3,
       
        title:"Safe & Hygienic",
    },
    {
        id:4,
        title:"Pure Veg",
    },  
    {
        id:5,
        icon: <i class="fi fi-rr-apps-sort"></i>,
        title:"Delivery Time",
    },
]
const restaurantsList= restaurants;

const Delivery= ()=> {
  return (

    <div className='max-width'>
  <Filters filterList={deliveryFilters}></Filters>
  <DeliveryCollection ></DeliveryCollection>
  <TopBrands></TopBrands>
  <ExploreSection list={restaurantsList} collectionName='Delivery Restaurants in Kolkata'></ExploreSection>
  </div>
 
  )
}

export default Delivery
