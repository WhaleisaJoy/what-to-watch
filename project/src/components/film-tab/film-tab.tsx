import { Link } from 'react-router-dom';

type FilmTabProps = {
  content: string;
  activeTab: string | null;
  handleClick: (evt: string) => void;
}

function FilmTab({ content, activeTab, handleClick }: FilmTabProps): JSX.Element {
  const activeClass = activeTab === content && 'film-nav__item--active';

  return (
    <li
      className={`film-nav__item ${activeClass}`}
      onClick={() => handleClick(content)}
    >
      <Link to="#" className="film-nav__link">
        {content}
      </Link>
    </li>
  );
}

export default FilmTab;
