import DetailsHeader from '../components/atoms/details-header'
import PlaybuttonContainer from '../components/atoms/playbutton-container'
import TabDetail from '../components/atoms/tab-detail'
import TabGrade from '../components/atoms/tab-grade'
import TabContainer from '../components/atoms/tabs-container'
import PlaylistHeader from '../components/molecules/playlist-header'
import PlaylistTitle from '../components/molecules/playlist-title'
import Thumbnail from '../components/molecules/thumbnail'
import Tabs from '../components/tabs'
import Layout from '../components/templates/motion'
import { apiSDK } from '../services/api-sdk'

export default function Home({ playlist }) {
  return (
    <Layout>
      <PlaylistHeader />
      <div className="md:flex md:justify-between">
        <Thumbnail />
        <div className="hidden md:inline order-first md:max-h-16">
          <PlaylistTitle />
          <TabDetail />
          <DetailsHeader playlistId={playlist.id} />
          <TabGrade contents={playlist.contents} />
        </div>
      </div>
      <div className="md:hidden">
        <PlaylistTitle />
      </div>
      <div className="md:hidden">
        <TabContainer>
          <Tabs contents={playlist.contents} />
        </TabContainer>
      </div>
      <PlaybuttonContainer />
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await apiSDK.getOnePlaylist('test')
  data.contents = data.contents.map((content) => content.content);

  return {
    props: {
      playlist: data,
    },
  }
}
