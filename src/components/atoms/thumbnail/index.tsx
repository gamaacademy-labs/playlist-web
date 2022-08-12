import React from 'react'
import Image from 'next/image'
import Thumbnail from "../../../assets/images/imageThumb.png"



function ImgThubnail() {
  return (
    <div className='mx-2'>
      <Image style={{borderRadius:"10px"  }} 
        src={Thumbnail}
        alt="Image thumbnail"
        //width={326} 
       // height={200} 
    
      />
    </div>
  )
}

export default ImgThubnail
