import React from 'react'

function ContainerBackgroundThumbnail({ children }) {
  return (
    <div className="w-full px-6 flex items-center justify-center md:justify-end max-w-md">
      {children}
    </div>
  )
}

export default ContainerBackgroundThumbnail
