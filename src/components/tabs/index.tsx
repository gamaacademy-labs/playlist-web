import { useState } from 'react'
import Layout from '../templates/motion'

interface Props {
  children: JSX.Element[],
}

const Tabs: React.FC<Props> = ({children}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const handleClick = (e, newActiveTab) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  return (
    <div>
      <ul className='flex
                   bg-white
                     border
                     border-[#CCD1CF]
                     rounded-full
                     gap-6
                     py-1
                     px-1
                     items-center'
      >
        {children.map((tab) => (
          <li className={tab.props.label == activeTab ? 'currentTab' : 'mx-2'} key={tab.props.label}>
            <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
          </li>
        ))}
      </ul>
        {children.map((details) => {
          if(details.props.label == activeTab)
          return (
            <Layout>
              <div key={details.props.label} className='p-4'>
                {details.props.children}
              </div>
            </Layout>
          )
        })}
    </div>
  )
}

export default Tabs
