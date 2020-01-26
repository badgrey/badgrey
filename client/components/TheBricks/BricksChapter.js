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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '10.5em'
        }}
      >
        {!!this.props.chapter.length &&
          this.props.chapter.map(page => (
            <div
              key={page.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              <img style={{ width: '60%' }} src={page.pageImage} />
            </div>
          ))}
      </div>
    );
  }
}

const mapState = state => ({
  chapter: state.theBricks.singleChapter
});

const mapDispatch = dispatch => ({
  loadSingleChapter: id => dispatch(loadSingleChapter(id))
});

export default connect(mapState, mapDispatch)(BricksChapter);
