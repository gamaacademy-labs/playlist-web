import { Typography } from '@mui/material'
import React from 'react'
import ContainerPersonIcon from '../../atoms/container-person-icon'
import DetailsHeader from '../../atoms/details-header'
import HamburgerIcon from '../../atoms/hamburger-icon'
import HeaderContainer from '../../atoms/header-container'
import MaterialComplementary from '../../atoms/material-complementary'
import NothingHereIcon from '../../atoms/nothing-here-icon'
import ReturnIcon from '../../atoms/return-icon'
import TabDetail from '../../atoms/tab-detail'
import UpDownIcon from '../../atoms/up-down-icon'
import Video from '../../atoms/video'
import PlaylistTitle from '../playlist-title'

function HederClassWithoutMaterial() {
  return (
    <div>
      <HeaderContainer>
        <div className='flex items-center gap-3'>
          <ReturnIcon />
          <p>Nome da Playlist</p>
        </div>
        <HamburgerIcon />
      </HeaderContainer>
      <Video />
      <PlaylistTitle />
      <ContainerPersonIcon />
      <MaterialComplementary />
      <NothingHereIcon />
      <div className='bg-white border-solid border-2 border-gray-300 w-96 mt-56 flex justify-around items-center p-4 '>
        <div>
          <p className='font-bold' >Conteúdo da Jornada</p>
        </div>
        <div>
          <UpDownIcon />
        </div>
      </div>

      <div className='bg-[#7d38db] border-solid border-2 border-gray-300 w-96   flex justify-around items-center p-4 '>
        <div>
        <p className="text-white text-sm">Próxima aula: Design centrado no usuário</p>
          <p className="text-white font-bold mt-2">Aula 1/8</p>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default HederClassWithoutMaterial
