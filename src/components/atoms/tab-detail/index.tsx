import DetailsHeader from '../details-header'
import PinIcon from '../pin-icon'
import ShareModal from '../../../components/atoms/share-modal'
import ShareIcon from '../share-icon'

const TabDetail = ({ description, playlistId }) => {
  return (
    <>
      <div className="md:hidden">
        <DetailsHeader  playlistId={playlistId}/>
      </div>
      <div className="px-2 text-sm md:mx-6 md:px-0">
        <p>
          {description}
        </p>
      </div>
      <div className="flex gap-8 mt-6 px-2 text-sm md:hidden">
        <div className="flex items-center gap-2">
          <PinIcon />
          <a href="#" className="underline">
            Salvar
          </a>
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
    </>
  )
}

export default TabDetail
