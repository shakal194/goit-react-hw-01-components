import PropTypes from 'prop-types';
import styles from './profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={styles['profile']}>
      <div className={styles['description']}>
        <img
          src={avatar}
          alt={'Avatar ' + username}
          className={styles['avatar']}
        />
        <p className={styles['username']}>{username}</p>
        <p className={styles['tag']}>@{tag}</p>
        <p className={styles['location']}>{location}</p>
      </div>

      <ul className={styles['stats']}>
        <li>
          <span className={styles['label']}>Followers</span>
          <span className={styles['quantity']}>{followers}</span>
        </li>
        <li>
          <span className={styles['label']}>Views</span>
          <span className={styles['quantity']}>{views}</span>
        </li>
        <li>
          <span className={styles['label']}>Likes</span>
          <span className={styles['quantity']}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
