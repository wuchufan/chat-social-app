import React from 'react';
import localCls from './Education.module.scss';

const Education = ({
  classes,
  education
}) => (
  <div className={classes['item']}>
    <h1 className={classes['title']}>
      Education
    </h1>
    {
      education
        ? <>
            {
              education.school && <p className={classes['field']}>
                  {education.school}
                </p>
            }

            {
              education.major && <p className={classes['field']}>
                  Field Of Study:{' '}
                  <span className={classes['content']}>{education.major}</span>
                </p>
            }
          </>
        : <p className={classes['field']}>Profile not added</p>
    }
  </div>
);



export default Education;
