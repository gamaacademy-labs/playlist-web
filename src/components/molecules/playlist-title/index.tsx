import { Rating } from '@mui/material'
import TitleContainer from '../../atoms/title-container'
import HipsterIcon from '../../atoms/hipster-icon'

export function PlaylistTitle({ title }) {
  return (
    <TitleContainer>
      <div className="flex items-center gap-2">
        <HipsterIcon />
        <h1>{title}</h1>
      </div>
      <div className="flex items-center gap-1 md:hidden">
        <Rating readOnly value={4} size="small" />
        <h1>(461)</h1>
      </div>
    </TitleContainer>
  )
}

export default PlaylistTitle
