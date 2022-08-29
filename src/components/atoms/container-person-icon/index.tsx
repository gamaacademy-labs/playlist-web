import React from 'react'
import { ContentCard } from '../../molecules/content-card'
import StudentIcon from '../student-icon'

function ContainerPersonIcon() {
  return (
    <div>
      <ul className="px-2 border rounded-lg bg-white w-80 ml-6 md:mx-6">
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex  ">
            <div className='mt-2'>
              <StudentIcon />
            </div>
            <div className='flex flex-col px-2 '>
              <div>
                <h2>Nome do Aluno</h2>
              </div>
              <div>
                <p>Profissão</p>
              </div>
            </div>
          </div>
        </li>
      </ul>



    </div>
  )
}

export default ContainerPersonIcon
