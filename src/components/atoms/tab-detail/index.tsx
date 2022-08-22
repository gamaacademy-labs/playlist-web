import DetailsHeader from '../details-header'
import PinIcon from '../pin-icon'
import ShareIcon from '../share-icon'

const TabDetail: React.FC = () => {
  return (
    <>
      <div className="md:hidden">
        <DetailsHeader />
      </div>
      <div className="px-2 text-sm md:mx-6 md:px-0">
        <p>
          Que tal aprender sobre UX Writing? A proposta é ensinar para você tudo
          sobre Tom, Voz e Humor ao escrever algo para o seu público, como
          utilizar tudo isso em e-mails, formulários, notificações e outros
          gatilhos. Alem de falarmos sobre SEO, que são estratégias para
          potencializar e melhorar o posicionamento de um site, e HCI, que é um
          conjunto de estudos que envolve a interação entre pessoas (usuários) e
          equipamentos.
        </p>
      </div>
      <div className="flex gap-8 mt-6 px-2 text-sm md:hidden">
        <div className="flex items-center gap-2">
          <PinIcon />
          <a href="#" className="underline">
            Salvar
          </a>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon />
          <a href="#" className="underline">
            Compartilhar
          </a>
        </div>
      </div>
    </>
  )
}

export default TabDetail
