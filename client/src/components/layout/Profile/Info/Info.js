import React,{ Fragment } from 'react';
import classes from './Info.module.scss'

const Info = ({
  username,
  profile: {
    education,
    social,
    age,
    game
  }
}) => {
  console.log(social);
  return (<section className={classes['container']}>
    {/* BASIC INFO */}
    {
      (age || username) && <div className={classes['basic-info'] + ' ' + classes['item']}>
          <h1 className={classes['title']}>
            Basic Info
          </h1>
          {
            username && <p className={classes['field']}>
                Username:{' '}
                <span className={classes['content']}>
                  {username}
                </span>
              </p>
          }

          {
            age && <p className={classes['field']}>Age:{' '}
                <span className={classes['content']}>
                  {age}
                </span>
              </p>
          }

        </div>
    }

    {/* EDUCATION */}

    <div className={classes['education'] + ' ' + classes['item']}>
      <h1 className={classes['title']}>
        Education
      </h1>
      {
        education
          ? <Fragment>
              {
              education.school &&
              <p className={classes['field']}>

                {education.school}
              </p>}

            {  education.major &&
              <p className={classes['field']}>
                Field Of Study:{' '}
                <span className={classes['content']}>{education.major}</span>
              </p>}
            </Fragment>
          : <p className={classes['field']}>Profile not added</p>
      }
    </div>

    {/* FAVORITE GAMES */}
    {
      game.length
        ? <div className={classes['games'] + ' ' + classes['item']}>
            {
              game.length
                ? <h1 className={classes['title']}>
                    Favorite games
                  </h1>
                : null
            }

            {
              game.length
                ? game.map((el) => (<div>
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

    {/* SOCIAL */}
      <div className={classes['social-media'] + ' ' + classes['item']}>
          <h1 className={classes['title']}>
            Social media
          </h1>

          {social ? <Fragment>
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
              </Fragment>
          : <p className={classes['field']}>Profile not added</p>}

        </div>


  </section>);
}

export default Info;
