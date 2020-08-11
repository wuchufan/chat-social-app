import React,{Fragment} from 'react';
import localCls from './Games.module.scss';

const Games = ({classes, games}) => {
  let render = games.map((el,i) => {

      if(!el.name && (i === 0)) return ((<div key={el._id} className={localCls['games'] + ' ' + classes['item']}>
        <p className={classes['field']}>Profile not added</p>
      </div>));
      return (
        <Fragment key={el._id}>
        {el.name ?
        <div className={localCls['games'] + ' ' + classes['item']}>
        <p className={classes['field']}>
                  <span className={classes['content'] + ' ' +localCls['name']}>
                    {el.name}
                  </span>
                </p>

        {el.genre ?
        (<p className={classes['field']}>
                  Genre:{' '}<span className={classes['content']}>
                    {el.genre}
                  </span>
                </p>) : null}

        {el.comment ?
        (<p className={classes['field']}>
                  <span className={classes['content']}>
                    {el.comment}
                  </span>
                </p>) : null}
          </div>
      :null}
  </Fragment>
  )
}
);


  return (
  <>
  <h1 style={{gridColumn:'1 / -1',margin:'1rem 0 0'}} className={classes['title']}>
<i style={{marginRight:'1rem'}} className="fas fa-gamepad"></i>
Favorite games
</h1>
  {render}
</>)
}

export default Games;
