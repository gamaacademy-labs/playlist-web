import DifficultyIcon from "../difficulty-icon";
import TimerIcon from "../timer-icon";

const DetailsHeader: React.FC = () => {
  return (
    <div className='py-4 my-6 border-y flex gap-8 mx-2'>
      <div className='flex items-center gap-2'>
        <TimerIcon />
        <div>
          <p className='text-xs font-bold'>Duração</p>
          <p>20 horas</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <DifficultyIcon />
        <div>
          <p className='text-xs font-bold'>Nivel</p>
          <p>Médio</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader;
