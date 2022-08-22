import PlayLargeIcon from '../playbutton-icon-lg'

const PlaybuttonContainer: React.FC = () => {
  return (
    <div className="bg-[#7D38DB] h-20 flex w-full items-center justify-center md:justify-end fixed bottom-0 p-4">
      <div>
         <button type='button' onClick={() =>{}} className="bg-[#FFFFFF] w-80 rounded h-10 flex items-center justify-center gap-3 font-semibold hover:opacity-80 ">Iniciar Playlist<PlayLargeIcon/></button>
      </div>
    </div>
  )
}

export default PlaybuttonContainer
