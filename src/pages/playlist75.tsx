import { GetServerSideProps } from 'next'
import DetailsHeader from '../components/atoms/details-header'
import DownloadCertificateButtonGreen from '../components/atoms/download-certificate-button-green'
import PlaybuttonContainer from '../components/atoms/playbutton-container'
import ProgressBarButton from '../components/atoms/progress-bar-button'
import RefreshButton from '../components/atoms/refresh-button'
import RefreshIcon from '../components/atoms/refresh-icon'
import TabDetail from '../components/atoms/tab-detail'
import TabGrade from '../components/atoms/tab-grade'
import TabContainer from '../components/atoms/tabs-container'
import PlaylistHeader from '../components/molecules/playlist-header'
import PlaylistTitle from '../components/molecules/playlist-title'
import Thumbnail from '../components/molecules/thumbnail'
import Tabs from '../components/tabs'
import Layout from '../components/templates/motion'

export default function Playlist75({ playlist }) {
  return (
    <Layout>
      <PlaylistHeader />

      <div className="md:flex md:justify-between">
        <Thumbnail />
        <div className="hidden md:inline order-first md:max-h-16">
          <PlaylistTitle />
          <TabDetail />
          <DetailsHeader />
          <TabGrade contents={playlist.contents} />
        </div>
      </div>
      <div className="md:hidden">
        <PlaylistTitle />

      </div>
      <div className="text-violet-700 md:hidden">
          <p style={{color: "#7d38db", marginLeft: 25}}>CERTIFICADO DISPONÍVEL</p>
          <div className="ml-5 mt-5">
          <DownloadCertificateButtonGreen/>
          </div>
      </div>
      <a href="/aula1"><RefreshButton contents={playlist.contents} /></a>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      playlist: {
        contents: [
          {
            id: 1,
            isVideoFinalized: true,
          },
          {
            id: 2,
            isVideoFinalized: false,
          },
          {
            id: 3,
            isVideoFinalized: false,
          },
        ],
      },
    },
  }
}
