import { ContentType } from '../../../interfaces'
import { ContentCard } from '../../molecules/content-card'
import ExternalLinkIcon from '../external-link-icon'

type TabProps = {
  contents: ContentType[];
  playlistTitle: string;
}

const TabGrade = ({ contents, playlistTitle }: TabProps) => {
  return (
    <div className="md:pb-24">
      <div className="my-4 md:px-6">
        <h2 className="text-base text-[#7D38DB] font-bold">
          GRADE DE CONTEÚDOS
        </h2>
      </div>
      <ul className="px-2 border rounded-lg bg-white md:mx-6">
       {contents.map((content, index) => (
        <ContentCard
          playlistTitle={playlistTitle}
          contentId={content.id}
          isVideoFinalized={content.studentHistory[0].isVideoFinished}
          key={index}
        />
       ))}
        <li className="border-b px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <ExternalLinkIcon />
            <h2>6. Duplo Diamante</h2>
          </div>
          <p>5:22</p>
        </li>
      </ul>
    </div>
  )
}

export default TabGrade
