import { Rating } from '@mui/material'
import DifficultyIcon from '../difficulty-icon'
import PinIcon from '../pin-icon'
import ShareIcon from '../share-icon'
import TimerIcon from '../timer-icon'
import ShareModal from '../../../components/atoms/share-modal'
import { apiSDK } from '../../../services/api-sdk'

function DetailsHeader({ playlistId }) {
  function createPlaylistFavorite() {
    try {
      apiSDK.createStudentPlaylistFavorite(playlistId, "student_id");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="py-4 my-6 border-y flex mx-2 md:mx-6 md:border-y md:border-gray-400 md:items-center md:justify-between">
      <div className="flex gap-8 md:gap-10">
        <div className="flex items-center gap-2">
          <TimerIcon />
          <div>
            <p className="text-xs font-bold">Duração</p>
            <p>20 horas</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DifficultyIcon />
          <div>
            <p className="text-xs font-bold">Nivel</p>
            <p>Médio</p>
          </div>
        </div>
        <div className="hidden md:flex md:items-center">
          <Rating readOnly value={4} size="large" />
          <p>(461)</p>
        </div>
      </div>
      <div className="hidden md:flex gap-8 mt-6 px-2 text-sm">
        <div className="flex items-center gap-2">
          <PinIcon />
          <button onClick={createPlaylistFavorite}>
            Salvar
          </button>
        </div>
        <div className="flex items-center gap-2">
          <ShareModal>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
              <ShareIcon />
              <div className="underline" style={{ marginLeft: '0.5rem' }}>
                Compartilhar
              </div>
            </div>
          </ShareModal>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader
