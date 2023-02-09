import React from 'react'
import hdStyle from "./BlogStyles.module.css";

export default function BlogHeader() {
  return (
    <div className={hdStyle.bheader_main_con} >

      <div className={hdStyle.bheader_con_1}>
          
      </div>

      <div className={hdStyle.bheader_con_2}>
        <a href="
        "></a>
      </div>

      <div className={hdStyle.bheader_con_3}>
          <a href="https://www.facebook.com/myfitnesspal/">
            <img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/facebook-512.png" alt="facebook" />
          </a>
          <a href="https://twitter.com/MyFitnessPal">
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-256.png" alt="twitter" />
          </a>
          <a href="https://www.instagram.com/myfitnesspal/">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-256.png" alt="instagram" />
          </a>
          <a href="https://www.pinterest.com/myfitnesspal/">
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-512.png" alt="pinterest" />
          </a>
      </div>
    </div>
  )
}
