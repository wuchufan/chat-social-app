import React from 'react';
import localCls from './Games.module.scss';

const Games = ({classes, games}) => (
  <>
  <h1 style={{gridColumn:'1 / -1',margin:'1rem 0 0'}} className={classes['title']}>
<i style={{marginRight:'1rem'}} className="fas fa-gamepad"></i>
Favorite games
</h1>
  {
    games.length
      ? games.map((el) => (<div className={localCls['games'] + ' ' + classes['item']}>

          <p className={classes['field']}>
            <span className={classes['content'] + ' ' +localCls['name']}>
              {el.name}
            </span>
          </p>
          <p className={classes['field']}>
            Genre:{' '}<span className={classes['content']}>
              {el.genre}
            </span>
          </p>
          <p className={classes['field']}>
            <span className={classes['content']}>
              {el.comment}
            </span>
          </p>

      </div>))
      : (<div className={localCls['games'] + ' ' + classes['item']}>
        <p className={classes['field']}>Profile not added</p>
      </div>)
  }

</>)

export default Games;
