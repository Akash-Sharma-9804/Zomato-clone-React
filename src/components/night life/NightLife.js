import React from 'react'
import './Night-life.css'
import Collection from '../common/collections/Collection';
import Filters from '../common/Filters/Filters';
import { nightlife } from '../../data/NightLifeData';
import ExploreSection from '../common/Explore section/ExploreSection';
import Offer from '../Offer/Offer';

const nightLifeFilters= [
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
     
      title:"Pubs & Bars",
  },
  {
      id:4,
      title:"Offers",
  },  
]
const collectionList = [
  {
    id: 1,
    cover:"	https://b.zmtcdn.com/data/collections/96541881ed7b42d424990403ac3afdbf_1712923159.png",
    title: "Top Treanding Spots",
    places: "27 Places",
  },
  {
    id: 2,
    cover: "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811168.png",
    title: "Newly Opened places",
    places: "8 Places",
  },
  {
    id: 3,
    cover:"https://b.zmtcdn.com/data/collections/52f34e70dc354041b6b869018b150e9d_1709813345.png",
    title: "Best Korean Restaurants",
    places: "10 Places",
  },
  {
    id: 4,
    cover:"https://b.zmtcdn.com/data/collections/1abd83e8e4dfd12c6f5f10e2372a31b7_1709810540.png",
    title: "Best Rooftop Places",
    places: "21 Places",
  },
  {
    id: 5,
    cover:"	https://b.zmtcdn.com/data/collections/ce8f94a179d859d01f94c441d67ef5ad_1706256808.png",
    title: "The Legends Of Kolkata",
    places: "22 Places",
  },
  {
    id: 6,
    cover:"https://b.zmtcdn.com/data/collections/eb98e6031b99817fc6a82712b99067f0_1696922856.png",
    title: "Best Pubs & Bars",
    places: "38 Places",
  },
  {
    id: 7,
    cover:"https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623169.png",
    title: "Finest Microbreweries",
    places: "10 Places",
  },
  {
    id: 8,
    cover:"https://b.zmtcdn.com/data/collections/757a7716d0478d646babef06ed7e8e2b_1709815728.png",
    title: "Best Buffets In Town",
    places: "19 Places",
  },
];

const NightList= nightlife;

function NightLife() {
  return (
    <div>
      <Collection list={collectionList}></Collection>
      <div className='max-width'>
      <Filters filterList={nightLifeFilters}></Filters>
      <Offer></Offer>
      </div>
      <ExploreSection list={NightList} collectionName='Nightlife: Night clubs, pubs and bar in Kolkata'></ExploreSection>
    </div>
  )
}

export default NightLife
