import React from "react";
import Image from 'next/image'
import ButtonPlay from "../../../assets/images/ButtomPlaylistMobileIniciar.png"

function BackgroundButtonPlaylist() {
  return (
    <>
      
      <div className="bg-[#f5f5f5]">
      <Image
        src={ButtonPlay}
        alt="Footer"
         width={552} 
         height={110} 
        // blurDataURL="data:..." automatically provided
           />
      </div>
      
      

    </>
  );
}

export default BackgroundButtonPlaylist;