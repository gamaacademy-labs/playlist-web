interface Props {
  children: React.ReactNode
}

const TabContainer: React.FC<Props> = ({children}) => {
  return (
    <div className='p-6'>
      {children}
    </div>
  )
}

export default TabContainer
