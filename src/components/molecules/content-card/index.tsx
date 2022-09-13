import CheckIcon from "../../atoms/check-icon";
import { Link } from "../../atoms/link";
import PlayIcon from "../../atoms/play-icon";

export function ContentCard({ isVideoFinalized, playlistTitle, contentId }) {
  return (
    <Link url={playlistTitle + "?contentId=" + contentId }>
      <li className="border-b px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <PlayIcon color="#7D38DB" size="16px" />
          <h2>1. Design centrado no usuário</h2>
        </div>
        <div className="ml-96 flex items-center ">
          {isVideoFinalized && (
            <div className='mr-4'>
              <CheckIcon />
            </div>
          )}
          <p>5:22</p>
        </div>
      </li>
    </Link>
  );
}
