let mocApiData = [
  {
    id: 1,
    name: 'first track'
  },
  {
    id: 2,
    name: 'second track'
  }
]

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I got tracks')
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mocApiData })
  }, 2000)
}
