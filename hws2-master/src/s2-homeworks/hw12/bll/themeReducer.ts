
const initState = {
  themeId: 1,
}

export type themeId = number
type InitialStateType = typeof initState

//*  типизация всего состояния (state), 
// * почему в stоte єтого нет ?
// ! --------------------------------- !!!
export type RootState = {

  theme: {
    themeId: number
  }
}
// ! --------------------------------- !!!

export const themeReducer = (state = initState, action: changeThemeIdActions): InitialStateType => { // fix any

  switch (action.type) {
    // дописать
    case 'SET_THEME_ID': {
      return {
        ...state,
        themeId: action.id
      }
    }
    default:
      return state
  }
}


export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number } => ({ type: 'SET_THEME_ID', id } as const) // fix any

type changeThemeIdActions = ReturnType<typeof changeThemeId>