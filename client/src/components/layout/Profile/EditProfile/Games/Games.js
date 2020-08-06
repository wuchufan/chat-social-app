import React from 'react';
import Game from './Game/Game';
import cls from './Games.module.scss';
import Button from '../../../../UI/Buttons/ProfileButton/ProfileButton';


const Games = ({games,classes,change}) => {

  return (
    <>
      <h1 className={classes['title']}>Favorite Games</h1>
      <div className={cls['container']}>
      {games.map((game,idx)=>{
        return <Game change={change} index={idx} value={game} key={idx} classes={classes}/>
      })}
      <Button color={'info'}>Add game</Button>
      </div>
    </>
  );
}



export default Games;
