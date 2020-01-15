import React, { PureComponent } from 'react';
import { loadSingleChapter } from '../../store';
import { connect } from 'react-redux';

class BricksChapter extends PureComponent {
  async componentDidMount() {
    const addressArray = this.props.match.params.name.split('_');
    const id = addressArray[addressArray.length - 1];
    await this.props.loadSingleChapter(id);
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {this.props.chapter &&
          this.props.chapter.pages.map(page => (
            <div key={page}>
              <img src={page} />
            </div>
          ))}
      </div>
    );
  }
}

const mapState = state => ({
  chapter: state.theBricks.chapter
});

const mapDispatch = dispatch => ({
  loadSingleChapter: id => dispatch(loadSingleChapter(id))
});

export default connect(mapState, mapDispatch)(BricksChapter);
