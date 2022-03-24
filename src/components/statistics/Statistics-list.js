import s from '../statistics/Statistics.module.css';

import getRandomHexColor from '../../random-color/random-color';

import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
