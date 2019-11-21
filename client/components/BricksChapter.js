import React from 'react';
import axios from 'axios'

const test = async () => {
  await axios.post('/api/bricks/chapter/')
  console.log('made it!')
}
const BricksChapter = props => {
  return (
    <div style={{marginTop: '20em'}}>
      <button onClick={test}>test</button>
    </div>
  )
}

export default BricksChapter
