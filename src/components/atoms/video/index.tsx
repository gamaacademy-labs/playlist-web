import React from 'react'

function Video({ url }) {
  return (
    <div className='flex w-96 h-52' >
      <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    </div>
  )
}

export default
Video
