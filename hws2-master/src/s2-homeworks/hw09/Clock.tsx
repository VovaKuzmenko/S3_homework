import React, { useState, useEffect } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)


  function getWeekDay(date: Date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  function getMonthDay(date: Date) {
    let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return Months[date.getMonth()];
  }

  let formatDate = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });

  let formatTime = new Intl.DateTimeFormat("ru", {
    hour12: false, // 12-часовой формат
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const [disabledButton, setDisabledButton] = useState(false)

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    stop()
    setDisabledButton(true)
    let tikTakTime = setInterval(() => setDate(new Date()), 1000)
    setTimerId(Number(tikTakTime))
  }

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    setDisabledButton(false)
    clearInterval(timerId)
    setTimerId(undefined)

  }


  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }

  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }

  // const stringTime = formatTime.format(date) || <br /> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringTime = formatTime.format(date) || <br />
  // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = formatDate.format(date) || <br /> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = getWeekDay(date) || <br /> // пишут студенты 
  const stringMonth = getMonthDay(date) || <br /> // пишут студенты
  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth}</span>,{' '}
              <span id={'hw9-date'}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          // disabled={true} // пишут студенты // задизэйблить если таймер запущен
          disabled={disabledButton ? true : false}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          // disabled={true} // пишут студенты // задизэйблить если таймер не запущен
          disabled={disabledButton ? false : true}
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
