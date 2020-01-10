import React from 'react'
// import {TrackInput} from './components/TrackInput.jsx'
import { connect } from 'react-redux'

import { getTracks } from './action/tracks'

class App extends React.Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value)
    this.props.onAddTrack(this.trackInput.value)
    this.trackInput.value = ''
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value)
    this.props.onFindTrack(this.searchInput.value)
  }

  render() {
    console.log(this.props.tracks)
    return (
      <div className="box">
        <input type="text" className="trackInput" ref={(input) => { this.trackInput = input }} />
        <div>
          <button className="btn" onClick={this.addTrack.bind(this)}>Add</button>
        </div>
        <div>
          <input type="text" className="trackInput" ref={(input) => { this.searchInput = input }} />
          <div>
            <button className="btn" onClick={this.findTrack.bind(this)}>Find</button>
          </div>
        </div>
        <div>
          <div>
            <button className="btn" onClick={this.props.onGetTracks}>Get</button>
          </div>
          <ol className="list">
            {this.props.tracks.map((track, index) =>
              <li key={index}>{track.name}</li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload })
    },
    onFindTrack: (name) => {
      dispatch({
        type: 'FIND_TRACK',
        payload: name
      })
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App)
