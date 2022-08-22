import DetailsHeader from '../components/atoms/details-header'
import PlaybuttonContainer from '../components/atoms/playbutton-container'
import ProgressBarButton from '../components/atoms/progress-bar-button'
import TabDetail from '../components/atoms/tab-detail'
import TabGrade from '../components/atoms/tab-grade'
import TabContainer from '../components/atoms/tabs-container'
import PlaylistHeader from '../components/molecules/playlist-header'
import PlaylistTitle from '../components/molecules/playlist-title'
import Thumbnail from '../components/molecules/thumbnail'
import Tabs from '../components/tabs'
import Layout from '../components/templates/motion'

export default function Home() {
  return (
    <Layout>
      <PlaylistHeader />
      <div className="md:flex md:justify-between">
        <Thumbnail />
        <div className="hidden md:inline order-first md:max-h-16">
          <PlaylistTitle />
          <TabDetail />
          <DetailsHeader />
          <TabGrade />
        </div>
      </div>
      <div className="md:hidden">
        <PlaylistTitle />
      </div>
      <div className="md:hidden">
        <TabContainer>
          <Tabs />
        </TabContainer>
      </div>
      <ProgressBarButton />
    </Layout>
  )
}
