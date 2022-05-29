import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import getRandomHexColor from '../../js/getRandomHexColor';

function Statistics({ title, stats }) {
  return (
    <section className={styles['statistics']}>
      {{ title } && <h2 className={styles['statistics']}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles['item']}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={styles['label']}>{label}</span>
              <span className={styles['percentage']}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
