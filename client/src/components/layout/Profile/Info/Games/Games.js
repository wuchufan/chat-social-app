import React from 'react';


const Games = ({
  classes,
  games
}) => (
  <>
  {
    games.length
      ? <div className={classes['games'] + ' ' + classes['item']}>
          {
            games.length
              ? <h1 className={classes['title']}>
                  Favorite games
                </h1>
              : null
          }

          {
            games.length
              ? games.map((el) => (<div>
                <p className={classes['field']}>
                  Name:{' '}<span className={classes['content']}>
                    {el.title}
                  </span>
                </p>
                <p className={classes['field']}>
                  Genre:{' '}<span className={classes['content']}>
                    {el.genre}
                  </span>
                </p>
              </div>))
              : null
          }
        </div>
      : null
  }
  </>
);

export default Games;
