import BackgroundButtonPlaylist from '../components/atoms/backgroud-button-playlist'
import TabContainer from '../components/atoms/tabs-container'
import PlaylistHeader from '../components/molecules/playlist-header'
import Thumbnail from '../components/molecules/thumbnail'
import Tabs from '../components/tabs'
import Layout from '../components/templates/motion'

export default function Home() {
	return (
		<Layout>
			<PlaylistHeader />
			<Thumbnail />
      <TabContainer>
        <Tabs />
      </TabContainer>
			<BackgroundButtonPlaylist/>
		</Layout>
	)
}
