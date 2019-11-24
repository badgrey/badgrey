import React, {PureComponent} from 'react';
import {loadChapter} from '../store/theBricks'
import {connect} from 'react-redux'


class BricksChapter extends PureComponent {

  async componentDidMount() {
    await this.props.loadChapter(this.props.match.params.name.split('_').join(' '))
  }

  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          this.props.chapter && this.props.chapter.pages.map(page => (
            <div key={page}>
              <img src={page} />
            </div>
          ))
        }
      </div>
    )
  }
}

const mapState = state => ({
  chapter: state.theBricks.chapter
})

const mapDispatch = dispatch => ({
  loadChapter: (name) => dispatch(loadChapter(name))
})

export default connect(mapState, mapDispatch)(BricksChapter)
