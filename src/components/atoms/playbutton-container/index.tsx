import { Box, Button, Typography } from '@gama-academy/smash-web'
import PlayLargeIcon from '../playbutton-icon-lg'

const PlaybuttonContainer: React.FC = () => {
  return (
    <div className="bg-[#7D38DB] h-20 flex w-full items-center justify-center md:justify-end fixed bottom-0 p-4">
      <div>
        <Button color="white" onClick={() => {}} size="3">
          <Box
            alignment="center"
            dir="row"
            justifyContent=""
            className="justify-center gap-3  w-[400px]"
          >
            <Typography fontWeight="semi_bold" mr="1">
              Iniciar Playlist
            </Typography>
            <PlayLargeIcon />
          </Box>
        </Button>
      </div>
    </div>
  )
}

export default PlaybuttonContainer
