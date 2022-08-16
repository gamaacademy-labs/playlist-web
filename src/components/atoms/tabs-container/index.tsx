interface Props {
  children: React.ReactNode
}

const TabContainer: React.FC<Props> = ({children}) => {
  return (
    <div className='p-2'>
      {children}
    </div>
  )
}

export default TabContainer
