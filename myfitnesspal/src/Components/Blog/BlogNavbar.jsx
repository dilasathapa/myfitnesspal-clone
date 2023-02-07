import React from 'react'
import navStyle from './BlogStyles.module.css'

export default function BlogNavbar() {
  return (
    <div>
        <div className={navStyle.bnav_container}>
            <a className={navStyle.bnav_pages} href="">
                <div  >RECIPES</div>
            </a>
            <a className={navStyle.bnav_pages} href="">
                <div >NUTRITION</div>
            </a>
            <a className={navStyle.bnav_pages} href="">
                <div >WEIGHT LOSS</div>
            </a>
            <a className={navStyle.bnav_pages} href="">
                <div >FITNESS</div>
            </a>
            <a className={navStyle.bnav_pages} href="">
                <div >INSPIRATION</div>
            </a>
            <a className={navStyle.bnav_pages} href="">
                <div>ESSENTIALS</div>
            </a>
            <a className={navStyle.bnav_pages} href="">
                <div>VIDEO</div>
            </a>
            
        </div>
    </div>
  )
}
