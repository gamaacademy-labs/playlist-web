import { useMemo } from 'react'
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
import { PlaylistType } from '../interfaces'
import { apiSDK } from '../services/api-sdk'

type HomeProps = {
  playlist: PlaylistType
}

export default function Home({ playlist }: HomeProps) {
  const progress = useMemo(() => {
    const visualizedStatus = playlist.contents.filter(
      content => content.studentHistory[0].isVideoFinished === true,
    ).length

    const total = playlist.contents.length

    const progressPercentage = Math.round((visualizedStatus / total) * 100)

    return progressPercentage
  }, [playlist.contents])

  return (
    <Layout>
      <PlaylistHeader />
      <div className="md:flex md:justify-between">
        <Thumbnail />
        <div className="hidden md:inline order-first md:max-h-16">
          <PlaylistTitle title={playlist.title}/>
          <TabDetail description={playlist.description} playlistId={playlist.id}/>
          <DetailsHeader playlistId={playlist.title} />
          <TabGrade playlistTitle={playlist.title} contents={playlist.contents} />
        </div>
      </div>
      <div className="md:hidden">
        <PlaylistTitle title={playlist.title}/>
      </div>
      <div className="md:hidden">
        <TabContainer>
          <Tabs contents={playlist.contents} description={playlist.description} playlistId={playlist.id} playlistTitle={playlist.title}/>
        </TabContainer>
      </div>
      {progress === 0 ? <PlaybuttonContainer/> : <ProgressBarButton progress={progress} />}
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await apiSDK.getOnePlaylist('Node avançado')
  data.contents = data.contents.map((content) => content.content);

  return {
    props: {
      playlist: data,
    },
  }
}
