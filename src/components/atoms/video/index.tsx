import React from 'react'

function Video({ url }) {
  return (
    <div>
      <iframe width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    </div>
  )
}

export default
Video
