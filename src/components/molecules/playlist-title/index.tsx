import { Typography } from '@gama-academy/smash-web'
import { Rating } from '@mui/material'
import TitleContainer from '../../atoms/title-container'
import HipsterIcon from '../../atoms/hipster-icon'

const PlaylistTitle: React.FC = () => {
  return (
    <TitleContainer>
      <div className="flex items-center gap-2">
        <HipsterIcon />
        <Typography type="title"> UX Writing e Microcopy</Typography>
      </div>
      <div className="flex items-center gap-1">
        <Rating readOnly value={4} size="small" />
        <Typography>(461)</Typography>
      </div>
    </TitleContainer>
  )
}

export default PlaylistTitle
