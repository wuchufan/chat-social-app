import React from 'react';


const Social = ({
  classes,
  social
}) => (
  <div className={classes['social-media'] + ' ' + classes['item']}>
    <h1 className={classes['title']}>
      Social media
    </h1>

    {
      social
        ? <>
            {
              social.github && <p className={classes['field']}>
                  github:{' '}
                  <span className={classes['content']}>
                    {social.github}
                  </span>

                </p>
            }
            {
              social.facebook && <p className={classes['field']}>
                  facebook:{' '}
                  <span className={classes['content']}>
                    {social.facebook}
                  </span>
                </p>
            }
          </>
        : <p className={classes['field']}>Profile not added</p>
    }

  </div>
);


export default Social;
