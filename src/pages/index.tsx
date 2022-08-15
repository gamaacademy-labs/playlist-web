import BackgroundButtonPlaylist from '../components/atoms/backgroud-button-playlist'
import TitleContainer from '../components/atoms/title-container'
import PlaylistHeader from '../components/molecules/playlist-header'
import PlaylistTitle from '../components/molecules/playlist-title'
import Thumbnail from '../components/molecules/thumbnail'
import Layout from '../components/templates/motion'

export default function Home() {
	return (
		<Layout>
			<PlaylistHeader />
			<Thumbnail />
			<PlaylistTitle />
			<BackgroundButtonPlaylist/>
		</Layout>
	)
}
