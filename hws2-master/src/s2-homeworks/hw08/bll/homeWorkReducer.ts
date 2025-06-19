import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      let sorting;
      if (action.payload === "up") {
        sorting = state.sort((a, b) => (a.name > b.name) ? 1 : -1)
      }
      if (action.payload === "down") {
        sorting = state.sort((a, b) => (a.name < b.name) ? 1 : -1)
      }
      return sorting // need to fix
    }
    case 'check': {
      const teenagerNumb = Number(action.payload)
      // ? самое интересное в этом задании
      // return state.sort((a, b) => a.age - b.age ? -1 : 1).filter((elem) => elem.age > teenagerNumb) // need to fix
      return state.filter((elem) => elem.age > teenagerNumb) // need to fix//? можно вот так
    }
    default:
      return state
  }
}
