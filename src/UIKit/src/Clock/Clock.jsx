import './Clock.css';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { format, formatISO } from 'date-fns';

import { joinClassNames } from '../Utils';


const MILLISECOND_IN_SECOND = 1000;

/**
 * Раз в секунду обновляет компонент для вывода текущей
 * даты и времени.
 *
 * Данный компонент становится на паузу если вкладка браузера
 * будет не активной.
 *
 * @param {String} className Дополнительный класс компонента
 * @param {Number} startTime Время начала запуска таймера в ms
 * @param {String} dateTimeFormat Формат вывода даты времени
 * (формат из библиотеки date-fns)
 * @param {Function} onTick Функция обратного вызова, запускается
 * раз в секунду
 */
function Clock({
  className,
  startTime,
  dateTimeFormat = 'dd.MM.yyyy HH:mm:ss',
  onTick = () => {},
}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeoutNumberRef = useRef();

  function setFrame(time) {
    const elapsedTime = time - startTime;
    const timeInSeconds = Math.round(elapsedTime / MILLISECOND_IN_SECOND);
    setCurrentTime(Date.now());
    onTick();
    const nextInterval =
      (timeInSeconds + 1) * MILLISECOND_IN_SECOND + startTime;
    timeoutNumberRef.current = setTimeout(
      () => requestAnimationFrame(setFrame),
      nextInterval - performance.now(),
    );
  }

  useEffect(() => {
    setFrame(startTime);
    return () => {
      clearTimeout(timeoutNumberRef.current);
    };
  }, []);
  return (
    <time
      dateTime={formatISO(currentTime)}
      className={joinClassNames(['clock', className])}
    >
      {format(currentTime, dateTimeFormat)}
    </time>
  );
}

Clock.propTypes = {
  className: PropTypes.string,
  startTime: PropTypes.number,
  dateTimeFormat: PropTypes.string,
  onTick: PropTypes.func,
};

Clock.defaultProps = {
  className: undefined,
  startTime: 0,
  dateTimeFormat: 'dd.MM.yyyy HH:mm:ss',
  onTick: () => {},
};

export default Clock;
