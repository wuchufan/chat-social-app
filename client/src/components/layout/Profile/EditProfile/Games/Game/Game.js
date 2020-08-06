import React from 'react';
import localCls from './Game.module.scss';
import Button from '../../../../../UI/Buttons/ProfileButton/ProfileButton';

const Game = ({
  classes,
  change,
  value:{
  name,
  genre,
  comment
  },
  removeGameHandler,
  index,
  totalGames
}) => {

  return (
    <div style={totalGames > 1 ? null : {paddingBottom:0}} className={localCls['container']}>
      <div className={localCls['container__inner']}>
        <div>
        <label className={classes['label']}>Name</label>
        <input placeholder='Name' className={classes['input']} name='name' value={name} onChange={(e)=>change(e,index)}/>
        </div>
        <div>
        <label className={classes['label']}>Genre</label>
        <input placeholder='Genre' className={classes['input']} name='genre' value={genre} onChange={(e)=>change(e,index)}/>
        </div>
      </div>
      <div>
        <label className={classes['label']}>Comment</label>
        <textarea placeholder='Tell People why you love this game!' className={localCls['textarea']} name='comment' value={comment} onChange={(e)=>change(e,index)}/>
      </div>
      {totalGames > 1 ?   <Button submit={false} click={()=>removeGameHandler(index)} color={'danger'}>Remove game</Button> : null}

    </div>

);
}

export default Game;
