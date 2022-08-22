import PlayLargeIcon from '../playbutton-icon-lg'
import { Progress } from "@material-tailwind/react"
import PlayIcon from '../play-icon'

const ProgressBarButton: React.FC = () => {
  return (

    <div className="bg-[#7D38DB] h-28  w-full   md:justify-end fixed bottom-0 p-4">

     <div className="w-80 flex flex-col gap-6">
    <div className="flex items-center gap-2" >
    <PlayIcon color="#FFFFFF" size="30px" />
    <p className="text-white">Aula</p>
    <p className="text-white">0/8</p>
    <Progress value={50} color="gray" />
    <p className="text-white">50%</p>


    </div>

    <div>

               <button type='button' onClick={() =>{}} className="bg-[#FFFFFF] w-80 rounded h-10 flex items-center justify-center gap-3 font-semibold hover:opacity-80 ">Continuar assinstindo<PlayLargeIcon/></button>
      </div>
      </div>

    </div>

  )
}

export default ProgressBarButton

