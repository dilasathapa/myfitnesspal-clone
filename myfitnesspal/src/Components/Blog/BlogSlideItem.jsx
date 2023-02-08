import React from 'react'
import slideStyle from './BlogStyles.module.css'

export default function BlogSlideItem({image,title}) {
  return (
    <div className={slideStyle.nslide_item_con}>
        
        <img className={slideStyle.bslide_img} src={image} alt="" />
        <p className={slideStyle.bslide_title}>{title}</p>
    </div>
  )
}
