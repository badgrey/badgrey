import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadSingleVolume } from '../../store';

class BricksVolume extends PureComponent {
  async componentDidMount() {
    await this.props.loadSingleVolume(this.props.match.params.id);
  }

  handleChapterClick = name => {
    name = name.split(' ').join('_');
    this.props.history.push(`Chapter/${name}`);
  };

  render() {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '6em' }}
      >
        {this.props.volume.BricksChapters &&
          this.props.volume.BricksChapters.map(chap => (
            <div
              key={chap.id}
              onClick={() => this.handleChapterClick(chap.title)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h2>{chap.title}</h2>
              <img src={chap.coverImage} />
            </div>
          ))}
      </div>
    );
  }
}

const mapState = state => ({
  volume: state.theBricks.selectedVolume
});

const mapDispatch = dispatch => ({
  loadSingleVolume: id => dispatch(loadSingleVolume(id))
});

export default connect(mapState, mapDispatch)(BricksVolume);
