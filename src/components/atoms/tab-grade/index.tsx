/* eslint-disable react/require-default-props */
import { useState } from 'react'
import CheckIcon from '../check-icon'
import ExternalLinkIcon from '../external-link-icon'
import PlayIcon from '../play-icon'

interface TabProps {
  isVideoFinished: boolean,
  duration: number,

}

const TabGrade = () => {

  const [isVideoFinished, setIsVideoFinished] = useState(() => false)


  return (
    <div className="md:pb-24">
      <div className="my-4 md:px-6">
        <h2 className="text-base text-[#7D38DB] font-bold">
          GRADE DE CONTEÚDOS
        </h2>
      </div>
      <ul className="px-2 border rounded-lg bg-white md:mx-6">
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
            <div className='ml-96 flex items-center ' >
            <div className='mr-4'>
            <CheckIcon />
            </div>
            <p>5:22</p>
            </div>

        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PlayIcon color="#7D38DB" size="16px" />
            <h2>1. Desgin centrado no usuário</h2>
          </div>
          <p>5:22</p>
        </li>
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <ExternalLinkIcon />
            <h2>6. Duplo Diamante</h2>
          </div>
          <p>5:22</p>
        </li>
      </ul>
    </div>
  )
}

export default TabGrade
