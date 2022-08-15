import BackgroundButtonPlaylist from '../components/atoms/backgroud-button-playlist'
import DetailsHeader from '../components/atoms/details-header'
import PlayIcon from '../components/atoms/play-icon'
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
        <Tabs>
          <div label='Detalhes'>
            <DetailsHeader />
            <div className='space-y-11 font-semibold'>
              <p>Que tal aprender sobre UX Writing? A proposta é
                ensinar para você tudo sobre Tom, Voz e Humor
                  ao escrever algo para o seu público, como utilizar
                  tudo isso em e-mails, formulários, notificações e
                  outros gatilhos.</p>
              <p>Alem de falarmos sobre SEO, que são estratégias
                para potencializar e melhorar o posicionamento
                  de um site, e HCI, que é um conjunto de estudos
                  que envolve a interação entre pessoas (usuários)
                  e equipamentos.</p>
            </div>
          </div>
          <div label='Grade de conteudo'>
            <h2 className='text-[#7D38DB] font-bold text-base my-4'>GRADE DE CONTEUDO</h2>
            <ul className='border rounded-lg bg-white'>
              <li className='p-6 text-sm font-medium flex justify-between items-center border-b'>
                <PlayIcon />
                <p>1. Desgin Centrado no usuário</p>
                <p>5:22</p>
              </li>
              <li className='p-6 text-sm font-medium flex justify-between items-center border-b'>
                <PlayIcon />
                <p>1. Desgin Centrado no usuário</p>
                <p>5:22</p>
              </li>
              <li className='p-6 text-sm font-medium flex justify-between items-center border-b'>
                <PlayIcon />
                <p>1. Desgin Centrado no usuário</p>
                <p>5:22</p>
              </li>
              <li className='p-6 text-sm font-medium flex justify-between items-center border-b'>
                <PlayIcon />
                <p>1. Desgin Centrado no usuário</p>
                <p>5:22</p>
              </li>
              <li className='p-6 text-sm font-medium flex justify-between items-center border-b'>
                <PlayIcon />
                <p>1. Desgin Centrado no usuário</p>
                <p>5:22</p>
              </li>
              <li className='p-6 text-sm font-medium flex justify-between items-center border-b'>
                <PlayIcon />
                <p>1. Desgin Centrado no usuário</p>
                <p>5:22</p>
              </li>
            </ul>
          </div>
        </Tabs>
      </TabContainer>
			<BackgroundButtonPlaylist/>
		</Layout>
	)
}
