import PlaybuttonContainer from '../components/atoms/playbutton-container'
import PlayLargeIcon from '../components/atoms/playbutton-icon-lg'
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
			<Thumbnail />
			<PlaylistTitle />
      <TabContainer>
        <Tabs />
      </TabContainer>
      <PlaybuttonContainer />
		</Layout>
	)
}
