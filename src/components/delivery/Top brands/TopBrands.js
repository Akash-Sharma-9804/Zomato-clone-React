import React from "react";
import "./top-brands.css";
import Slider from "react-slick";
import NextArrow from '../../common/carousel/NextArrow';
import PrevArrow from '../../common/carousel/PrevArrow';
import TopBrandsList from "./Top brands list/TopBrandsList";


const brands = [
  {
    id: 1,
    title: "WOW! Momo",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389253.png?output-format=webp",
    time: "27 min",
    },
  {
    id: 2,
    title: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252746.png?output-format=webp",
    time:"43 min",
    },
  {
    id: 3,
    title: "Arsalan",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp",
    time:"43 min",
    },
  {
    id: 4,
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
    time:"25 min",
    },
  {
    id: 5,
    title: "Chowman",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b5068f3dfc0118b7b8a3cd0429ac953f_1696570852.png?output-format=webp",
    time:"28 min",
    },
  {
    id: 6,
    title: "Oudh 1590",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/acbdc3d44519ca1392d279c59d7fdc8d_1611320510.png?output-format=webp",
    time:"40 min",
    },
  {
    id: 7,
    title: "Gupta Brothers",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png?output-format=webp",
    time:"22 min",
    },
  {
    id: 8,
    title: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607803.png?output-format=webp",
    time:"45 min",
    },
  {
    id: 9,
    title: "Pizza Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
    time:"36 min",
    },
 
];

const settings = {
    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: < NextArrow />,
    prevArrow: < PrevArrow />,
  };


const TopBrands = () => {
  return <div className="top-brands">
     <div className="max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {brands.map((brand)=>{
                return  <TopBrandsList brand={brand}></TopBrandsList>
            })}
    </Slider>
     </div>
    </div>;
};

export default TopBrands;
