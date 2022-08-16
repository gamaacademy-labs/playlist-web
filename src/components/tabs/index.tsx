import { useState } from 'react'
import TabDetail from '../atoms/tab-detail'
import TabGrade from '../atoms/tab-grade'
import Layout from '../templates/motion'


const Tabs: React.FC = () => {
  const tabsTypes = {
     DESCRIPTION: {
      title: 'Detalhes',
      content: 'Detalhes'
    },
    CONTENTGRADE: {
      title: 'Grade de conteudo',
      content: 'Grade de conteudo'
    }
  }

  const [activeTab, setActiveTab] = useState(tabsTypes.DESCRIPTION.title)
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
                     gap-4
                     py-1
                     px-1
                     items-center
                     mx-4
                     text-xs'
      >
          <li className={tabsTypes.DESCRIPTION.title == activeTab ? 'currentTab' : 'mx-2'}>
            <a href="#" onClick={(e) => handleClick(e, 'Detalhes')}>Detalhes</a>
          </li>
          <li className={tabsTypes.CONTENTGRADE.title == activeTab ? 'currentTab' : 'mx-2'}>
            <a href="#" onClick={(e) => handleClick(e, 'Grade de conteudo')}>Grade de conteudo</a>
          </li>
      </ul>
        {Object.entries(tabsTypes).map(([key, tab]) => {
          if(tab.title == activeTab)
          return (
            <Layout>
              <div key={key} className='p-4'>
                {tab.title == tabsTypes.DESCRIPTION.title ?
                  <TabDetail /> :
                  <TabGrade />
                }
              </div>
            </Layout>
          )
        })}
    </div>
  )
}

export default Tabs
