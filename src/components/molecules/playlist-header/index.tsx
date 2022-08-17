import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import HeaderThumbnailContainer from '../../atoms/header-thumbnail-container'

const PlaylistHeader: React.FC = () => {
  return (
    <HeaderThumbnailContainer>
      <Link href="#">
        <a className="text-[#7d38db]">Início</a>
      </Link>
      <FaAngleRight />
    </HeaderThumbnailContainer>
  )
}

export default PlaylistHeader
