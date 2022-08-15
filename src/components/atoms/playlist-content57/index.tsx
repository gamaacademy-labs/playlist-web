import React from 'react'
import Image from "next/image"
import ButtonPlay from "../../../assets/images/favorite.png"
import Clips from "../../../assets/images/clips.png"
import Table from "../../../assets/images/table.png"

function PlayListContent() {
  return (
    <>
      <div className='flex gap-5 p-5 bg-[#FFFFFF] rounded-md border border-gray-300 '>

        <div className="">
          <Image
            src={ButtonPlay}
            alt="Button Play"
          />
        </div>
        <div className="">
          <p>1. Design centrado no usuário</p>
        </div>
        <div className='ml-11'>
          <h5>5:22</h5>
        </div>
      </div>
      <div className='flex gap-5 p-5 bg-[#FFFFFF] border border-gray-300 '>

        <div className="">
          <Image
            src={ButtonPlay}
            alt="Button Play"
          />
        </div>
        <div className="">
          <h5>2. UI x UX</h5>
        </div>
        <div>
          <Image
            src={Clips}
            alt="Button Play"
          />
        </div>
        <div className="ml-40">
          <h5>4:57</h5>
        </div>

      </div>
      <div className='flex gap-5 p-5 bg-[#FFFFFF]  border border-gray-300 '>

        <div className="">
          <Image
            src={ButtonPlay}
            alt="Button Play"
          />
        </div>
        <div className="">
          <p>3. Design thinking</p>
        </div>
        <div className='ml-32'>
          <h5>3:03</h5>
        </div>
      </div>
      <div className='flex gap-5 p-5 bg-[#FFFFFF]  border border-gray-300 '>

        <div className="">
          <Image
            src={ButtonPlay}
            alt="Button Play"
          />
        </div>
        <div className="">
          <p>4. O nome de uma aula que ...</p>
        </div>
        <div className='ml-12'>
          <h5>8:33</h5>
        </div>
      </div>
      <div className='flex gap-5 p-5 bg-[#FFFFFF]  border border-gray-300 '>
        <div className="">
          <Image
            src={ButtonPlay}
            alt="Button Play"
          />
        </div>
        <div className="">
          <p>5. Conceitos e Referências UI</p>
        </div>
        <div className='ml-12'>
          <h5>11:42</h5>
        </div>
      </div>
      <div className='flex gap-5 p-5 bg-[#FFFFFF] rounded-md border border-gray-300 '>
        <div className="">
          <Image
            src={Table}
            alt="Button Play"
          />
        </div>
        <div className="">
          <p>6. Duplo diamante</p>
        </div>
      </div>
    </>
  )
}

export default PlayListContent
