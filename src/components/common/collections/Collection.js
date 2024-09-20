import React from 'react'
import './collection.css'
import Slider from 'react-slick'
import PrevArrow from '../carousel/PrevArrow';
import NextArrow from '../carousel/NextArrow';


const settings = {
    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: < NextArrow />,
    prevArrow: < PrevArrow/>,
  };



const Collection = ({list}) => {
  return (
    <div className='collection-wrapper'>
        <div className='max-width collection'>
            <div className='collection-title'>Collections</div>
            <div className='col-sub-row'>
                <div className='col-sub-text'>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends

                </div>
                <div className='col-location'> 
                    <div>All collections in Kolkata</div>
                    <i class="fi fi-rr-caret-right absolute-center"></i>
                </div>
            </div>
            <Slider {...settings}>     
           {list.map((item)=>{
            return <div>
                <div className='collection-cover'>
                    <img src={item.cover} alt={item.title} className='collection-img' />
                   
                    <div className='gradient-bg'></div>
                    <div className='collection-card-title'>{item.title}</div>
                        <div className='collection-class-subtitle'>
                            <div>{item.places}</div>
                            <i class="fi fi-rr-caret-right absolute-center"></i>
                            </div>
                </div>
            </div>
           })}

        </Slider>
        
        </div>
      
    </div>
  )
}

export default Collection
