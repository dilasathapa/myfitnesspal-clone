import React from 'react'
import listStyle from './BlogStyles.module.css'

export default function BlogArticleLiseItem({image,title,date}) {
  return (
    <div className={listStyle.blist_item_con}>
        
    <img className={listStyle.blist_item_img} src={image} alt="" />
    <h3  className={listStyle.blist_item_title}>{title}</h3>
    <p className={listStyle.blist_item_date}>{date}</p>

</div>
  )
}
