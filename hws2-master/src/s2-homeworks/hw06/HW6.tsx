import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'
import { g } from 'react-router/dist/development/fog-of-war-BLArG-qZ'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
    const [value, setValue] = useState<string>('')

    // как где и когда используются вместо или с localStorage
    // в этом дз мы используем localStorage, но в реальных проектах лучше использовать
    // что-то вроде redux-persist, mobx-persist или другие библиотеки для сохранения состояния
    // в localStorage сохраняем значение value
    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        // делают студенты
                   
      // в localStorage сохраняем значение value, а в restoreState восстанавливаем его
      // на будущее почитать и хорошо разобраться с localStorage и sessionStorage
    const restoredValue = restoreState<string>('hw6-editable-span-value', '')
    setValue(restoredValue)

    }

    return (
        <div id={'hw6'}>
            <div className={s2.hwTitle}>Homework #6</div>

            {/*демонстрация возможностей компоненты:*/}
            <div className={s2.hw}>
                <div className={s.editableSpanContainer}>
                    <SuperEditableSpan
                        id={'hw6-spanable-input'}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{
                            id: 'hw6-editable-span',
                            defaultText: 'enter text...',
                        }}
                    />
                </div>

                <div className={s.buttonsContainer}>
                    <SuperButton id={'hw6-save'} onClick={save}>
                        Save to ls
                    </SuperButton>
                    <SuperButton
                        id={'hw6-restore'}
                        onClick={restore}
                        xType={'secondary'}
                    >
                        Get from ls
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default HW6
