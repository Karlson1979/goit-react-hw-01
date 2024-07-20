import React from 'react'
import css from './Profile.module.css'
 const Profile = ({name,tag,location,image,stats}) => {
  return (
    <div className={css.card}>
  <div>
    <img className={css.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}> {name}</p>
    <p className={css.content}>{tag}</p>
    <p className={css.content}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.statsTitle}>Followers</span><br />
      <span className={css.stats}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.statsTitle}>Views</span> <br/>
      <span className={css.stats}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.statsTitle}>Likes</span> <br />
      <span className={css.stats}>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile