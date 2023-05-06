import { useState } from "react"

const Product = ({image ,name, category, size, color, weight, sp_inst, price}) => {
    const [isIncreased, setIsIncreased] = useState(0);
    // const[isDecreased, setIsDecreased] = useState(0);
    
    const increase = ()=>{
      setIsIncreased((count)=>count + 1);
  
    }
    const decrease = ()=>{
       isIncreased<=0?setIsIncreased(0):setIsIncreased((count)=>count-1);
    }
    return (
      <>
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt="camera" width={300} height={300}/>
        </div>
        <div className="product-detail">
          <div className="product-heading">
          <h2 className="product-title">{name}</h2>
          <p className="product-category">{category}</p>
          </div>
          
          <div className="product-description">
            <p>Size:{size}</p>
            <p>Color:{color}</p>
            <p>Weight:{weight} </p>
            <p>Special instruction:{sp_inst}</p>
          </div>
          <div className="quantity">
          <button className="dcr" onClick={decrease}>-</button>
          <div className="quantity_num">{isIncreased}</div>
          <button className="inr" onClick={increase}>+</button>
        </div>
        <h2 className="price">Price : {isIncreased * price }</h2>
        </div>
      </div>
      
      </>
  )
}

export default Product
