import PlayIcon from "../play-icon";



const TabGrade: React.FC = () => {
  return (
    <ul className='px-2 border rounded-lg bg-white'>
      <li className='border-b px-5 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <PlayIcon />
          <h2>1. Desgin centrado no usuário</h2>
        </div>
        <p>5:22</p>
      </li>
      <li className='border-b px-5 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <PlayIcon />
          <h2>1. Desgin centrado no usuário</h2>
        </div>
        <p>5:22</p>
      </li>
      <li className='border-b px-5 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <PlayIcon />
          <h2>1. Desgin centrado no usuário</h2>
        </div>
        <p>5:22</p>
      </li>
    </ul>
  )
}

export default TabGrade;
