import React from 'react';

const Categories = ({filterItems, allCats}) => {

  return(
    <div className="btn-container">
      {
        allCats.map((i,index)=> {
          return(
            <button 
                className="filter-btn" 
                onClick={()=> 
                filterItems(i)}
            >
              {i}    
            </button>
          )
        })
      }

    </div>
  )
};

export default Categories;
