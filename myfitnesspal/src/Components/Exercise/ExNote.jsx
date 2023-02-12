import React from 'react'

export default function () {
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <h4>
                Today's Exercise Notes
            </h4>
            <a href="">
                <p>
                    Edit Note
                </p>
            </a>
        </div>
        <div>
            <textarea style={{width:'100%'}} name="" id="" cols="30" rows="6"></textarea>
        </div>
    </div>
  )
}
