import React from 'react'

export const TrackInput = () => {

  return (
    <div>
      <input type="text" className="trackInput" />
      <div>
        <button className="btn">Add</button>
      </div>
      <div>
        <ol className="list">
          {this.props.testStore.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ol>
      </div>
    </div>
  )
}
