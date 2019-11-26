import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {loadVolumes} from '../store'

class AllBricksVolumes extends PureComponent {

  async componentDidMount() {
    await this.props.loadVolumes()
  }

  handleVolumeClick = (id) => {
    this.props.history.push(`TheBricks/${id}`)
  }

  render() {
    return (
      this.props.volumes.length && (
      <div className="allBricksVolumesRoot" >
        {
          this.props.volumes.map(vol => (
            <div className="allVolumesSingleVolume" key={vol.id} onClick={() => this.handleVolumeClick(vol.id)}>
              <h2 className="allVolumesSingleTitle">{vol.title}</h2>
              <img className="allVolumesSingleImage" src={vol.coverImage} />
              <p className="allVolumesSingleDescription">{vol.description}</p>
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
