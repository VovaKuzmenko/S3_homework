import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType
* 2 - указать нужный тип в useState с users
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 9 - в файле Greeting.tsx дописать типизацию пропсов
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
  // _id: any // need to fix any
  _id: string
  // name: any // need to fix any
  name: string
}

// export const pureAddUserCallback = (name: any, setUsers: any, users: any) => { // need to fix any
export const pureAddUserCallback = (name: string, setUsers: (s: UserType[]) => void, users: UserType[]) => {
  // const user = { // need to fix
  const user = {
    _id: v1(), name: name
  }
  const rezultArr = [user, ...users]
  setUsers(rezultArr)
  // console.log(rezultArr)
  // "userId-", user.id,
  // debugger

}

const HW3 = () => {
  // const [users, setUsers] = useState<any>([]) // need to fix any
  const [users, setUsers] = useState<UserType[]>([])

  // const addUserCallback = (name: any) => { // need to fix any
  const addUserCallback = (name: string) => {
    pureAddUserCallback(name, setUsers, users)
    // console.log(users) 
    // const NewUsers = users.map(el => console.log(el))

  }

  return (
    <div id={'hw3'}>
      <div className={s2.hwTitle}>Homework #3</div>
      {/*для автоматической проверки дз (не менять)*/}

      <div className={s2.hw}>
        <GreetingContainer

          users={users}
          addUserCallback={addUserCallback}
        />
      </div>
    </div>
  )
}

export default HW3
