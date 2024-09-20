import React from 'react'
import './Filters.css'
 import FilterItem from './FilterItem';

const Filters = ({filterList})=> {
  return (
    <div className='filters'>
    {filterList && filterList.map((filter)=>{
        return <FilterItem filter={filter} key={filter.id}></FilterItem>
    })}
    </div>
    // <div>This is Filter</div>
    
  )
};

export default Filters
