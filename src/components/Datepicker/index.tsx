import React from 'react';
import cn from 'classnames';
import { useDate } from '../../hooks/useDate';
import styles from './Datepicker.module.scss';
import { getFirstDayOffset, getCurrentMonthDays } from '../../utils';

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  onClick: any,
) => {
  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!ref?.current) return;
      if (!ref.current.contains(e.target)) {
        onClick?.(e);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);
};

const dayOrder = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export default function Datepicker() {
  const { date, setDate } = useDate();
  const calendarRef = React.useRef(null);

  const [isCalendarVisible, setCalendarVisible] = React.useState(false);

  useClickOutside(calendarRef, () => setCalendarVisible(false));

  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */}
        <span
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            setCalendarVisible(!isCalendarVisible);
          }}
        >
          {date.toLocaleString('en-us', {
            weekday: 'short',
          })}{' '}
          {date.getDate()}
        </span>
      </div>
      {isCalendarVisible && (
        <div ref={calendarRef} className={styles.calendar}>
          {Array.from({ length: 7 }).map((v, i) => (
            <div className={styles.calendar_head}>{dayOrder[i]}</div>
          ))}
          {Array.from({ length: getFirstDayOffset() }).map((v, i) => (
            <div />
          ))}
          {Array.from({ length: getCurrentMonthDays() }).map((v, i) => (
            <div
              onClick={() => {
                setDate(
                  new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    getFirstDayOffset() + i - 2,
                  ),
                );
                setCalendarVisible(false);
              }}
              className={cn(styles.calendar_day, {
                [styles.calendar_day_today]: i === date.getDate() - 1,
              })}
            >
              {i + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
