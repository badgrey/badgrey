import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchOriginalContent} from '../store'
import {Link} from 'react-router-dom'

export class OriginalContent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.originalcontent.length){
      this.props.getOriginalContent()
    }
  }
  render() {
    return (
      !this.props.originalcontent.length ? null :
      <div>
        <div className="OCheader">
          <h1>Bad Grey Films</h1>
        </div>
        <div className="OCcontainer">
          {
            this.props.originalcontent.map((oc) => {
              console.log('YOOO LOOK HERE', oc)
              return (
                <div key={oc.id} className="singleoc">
                    <YoutubePlayer ytID={oc.youtubeId} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}


const mapState = ({originalcontent}, ownProps) => {
  return {
    originalcontent
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOriginalContent() {
      dispatch(fetchOriginalContent())
    }
  }
}

export default connect(mapState, mapDispatch)(OriginalContent)
