import React from 'react';
import Game from './Game/Game';
import cls from './Games.module.scss';
import Button from '../../../../UI/Buttons/ProfileButton/ProfileButton';


const Games = ({
  games,
  classes,
  change,
  addGameHandler,
  removeGameHandler
}) => {
  const disableStyle = {
    opacity:0.6,
    pointerEvents:'none'
  }
  let canAdd = true;
  games.forEach((game) =>{
    if(!game.name) canAdd = false;
  })


  return (
    <>
      <h1 className={classes['title']}>Favorite Games</h1>
      <div className={cls['container']}>
      {games.map((game,idx)=>{

        return <Game totalGames={games.length} removeGameHandler={removeGameHandler} change={change} index={idx} value={game} key={idx+'1'} classes={classes}/>
      })}
      {canAdd ?
      <Button submit={false} click={addGameHandler} color={'info'}>Add game</Button>
      : <Button style={disableStyle} disabled submit={false} click={addGameHandler} color={'info'}>Add game</Button>
      }

      </div>
    </>
  );
}



export default Games;
