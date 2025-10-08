import React, { MouseEventHandler, useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
  const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

  const change = (event: React.MouseEventHandler<HTMLSpanElement>, value: number) => {
    // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый

    /************************************************** */
    // Тут изменение значения записываются в стейт и потом перепысываются.
    setValue1(20)
    setValue2(40)
  }

  return (
    <div id={'hw11'}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>{value1}</span>
            <SuperRange
              id={'hw11-single-slider'}
            // сделать так чтоб value1 изменялось // пишет студент
            /************************************************** */
            // 3. Задается значение 2-го ползунка
            // value={[10]}
            /************************************************** */
            />
          </div>
          <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>{value1}</span>
            <SuperRange
              //! value={[1, 10]} - элемнт отображения шариков в процентах от ширины экрана; отображая в width на картинке
              //! соответственно нам рассчитывать необходимо от ширины на экране, а не от общей
              //! событие мышкой задает величину и передает ее в массив ползунка

              // todo Алглритм:
              // * 1. Передать "величину" событие мышкой (верхний ползунок) в useState
              // * 2. Окрасить следующую за ней область в зеленый цвет (не обязательно)
              // * 3. Привязать ползунок 2 к первому через useState
              // * 4. сделать 2-й шарик (ползунок 2) и  к передавать его значение useState
              id={'hw11-double-slider'}
            // сделать так чтоб value1/2 изменялось // пишет студент
            /************************************************** */
            // value={[10, 15]}
            /************************************************** */
            />
            <span id={'hw11-value-2'} className={s.number}>{value2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW11
