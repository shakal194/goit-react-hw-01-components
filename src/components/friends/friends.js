import PropTypes from 'prop-types';
import styles from './friends.module.css';

function Friends(friends) {
  return (
    <ul className={styles['friend-list']}>
      {friends.friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles['item']}>
          <span
            className={styles['status']}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className={styles['avatar']}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles['name']}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
