import PlaylistHeader from '../components/molecules/playlist-header'
import Thumbnail from '../components/molecules/thumbnail'
import Layout from '../components/templates/motion'

export default function Home() {
	return (
		<Layout>
			<PlaylistHeader />
			<Thumbnail />
		</Layout>
	)
}
