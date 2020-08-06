import React from 'react';
import localCls from './BasicInfo.module.scss';

const BasicInfo = ({
  age,
  email,
  classes
}) => {
  return (
    <>
    {
      (age || email) && <div className={classes['item']}>
          <h1 className={classes['title']}>
            Basic Info
          </h1>
          {
            email && <p className={classes['field']}>
                Email:{' '}
                <span className={classes['content']}>
                  {email}
                </span>
              </p>
          }

          {
            age || age === 0 ? <p className={classes['field']}>Age:{' '}
                <span className={classes['content']}>
                  {age}
                </span>
              </p> : null
          }

        </div>
    }
    </>

  );
}


export default BasicInfo;
