import { useState } from 'react';
import { FilmTabsName } from '../../database';
import type { Comment } from '../../types/comment';
import type { Film } from '../../types/film';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmTab from '../film-tab/film-tab';

type FilmTabsProps = {
  film: Film;
  comments: Comment[];
}

function FilmTabs({ film, comments }: FilmTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string | null>(FilmTabsName[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">

          {
            FilmTabsName.map((tab) => (
              <FilmTab
                key={tab}
                content={tab}
                activeTab={activeTab}
                handleClick={handleClick}
              />
            ))
          }

        </ul>
      </nav>

      { activeTab === FilmTabsName[0] && <FilmOverview film = {film} /> }
      { activeTab === FilmTabsName[1] && <FilmDetails film = {film} /> }
      { activeTab === FilmTabsName[2] && <FilmReviews comments = {comments} /> }
    </>

  );
}

export default FilmTabs;
