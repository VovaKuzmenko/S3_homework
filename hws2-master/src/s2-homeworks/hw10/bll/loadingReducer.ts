const initState = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: any): typeof initState => { // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    // Обработка экшена для изменения состояния загрузки.
    case 'CHANGE_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

// Action creator для создания экшена изменения загрузки.
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
})
