import React from 'react'
import { useState, useEffect } from 'react'

const ProductDetail = ({product}) => {

    const colorArray = product.colorOptions
    const productTitle = product.title
    const productDesc = product.description
    // const featuresArray = product.featureList

    const [selectedId, setSelectedId] = useState(0)
    
    let imgPreview = 'https://imgur.com/iOeUBV7.png'
    const [srcPreview, setSrcPreview] = useState(imgPreview)


    const setIdFunction =(id)=>{
        setSelectedId(id)
        return selectedId
    }

    useEffect(()=>{
        setSrcPreview(colorArray[selectedId].imageUrl)
    }, [selectedId, colorArray])
        


  return (
    <div className='productDetails'>
        <div className="productImg">
            <img className='img' src={srcPreview} alt="" />
        </div>
        <div className="productBody">
            <h2 style={{marginTop: '16px'}}>{productTitle}</h2>
            <p style={{marginTop: '16px', marginBottom: '16px'}}>{productDesc}</p>
            <h3>Select Colour:</h3>
            <div className='colorColumn'>
                
                {
                    colorArray.map((color, pos)=>(

                        <div className='colorPalette' key={pos} onMouseEnter={()=>{
                            setIdFunction(pos)
                            
                        }}><img className='img' src={color.imageUrl} alt="" /></div>
                    
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default ProductDetail