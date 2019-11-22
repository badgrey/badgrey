import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {loadVolumes} from '../store'

class AllBricksVolumes extends PureComponent {

  async componentDidMount() {
    await this.props.loadVolumes()
  }

  render() {
    return (
      this.props.volumes.length && (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          this.props.volumes.map(vol => (
            <div key={vol.id} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2>{vol.title}</h2>
              <img src={vol.coverImage} />
              <p>{vol.description}</p>
            </div>
          ))
        }
      </div>
      )
    )
  }
}

const mapState = state => ({
  volumes: state.theBricks.volumes
})

const mapDispatch = dispatch => ({
  loadVolumes: () => dispatch(loadVolumes())
})

export default connect(mapState, mapDispatch)(AllBricksVolumes)
