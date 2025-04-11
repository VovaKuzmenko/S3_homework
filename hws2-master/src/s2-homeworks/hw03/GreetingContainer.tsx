import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  // users: any // need to fix any
  users: UserType[]
  // addUserCallback: any // need to fix any
  addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (s: string) => void, setName: (s: string) => void, addUserCallback: (name: string) => void) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name !== '') {
    addUserCallback(name)
    setName('')
  } else {
    setError('Name is required')
  }
}

export const pureOnBlur = (name: string, setError: (s: string) => void) => { // если имя пустое - показать ошибку
  if (name == '') {
    setError('Name is required')
  }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
  if (e.key === 'Enter') {
    addUser()
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  // const setNameCallback = (e: any) => { // need to fix any
  //   setName('some name') // need to fix
  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // setName(e.currentTarget.value)
    setName(e.currentTarget.value)
    // console.log(name)
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }

  // const totalUsers = 0 // need to fix
  const totalUsers = users.length
  // const lastUserName = 'some name' // need to fix
  const lastUserName = (users[0] == undefined ? '' : users[0].name)

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
