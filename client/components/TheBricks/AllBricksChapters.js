import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadChapters } from '../../store';

class AllBricksChapters extends PureComponent {
  async componentDidMount() {
    await this.props.loadChapters();
  }

  handleChapterClick = (id, title) => {
    const titleRoute = title.split(' ').join('_');
    this.props.history.push(`TheBricks/${titleRoute}_${id}`);
  };

  render() {
    return (
      this.props.chapters.length && (
        <div className="allBricksChaptersRoot">
          {this.props.chapters.map(chapter => (
            // new Array(20).fill(null).map((chapter, i) => (
            <div
              className="allChaptersSingleChapter"
              key={this.props.chapters[0].id}
              onClick={() =>
                this.handleChapterClick(
                  this.props.chapters[0].id,
                  this.props.chapters[0].title
                )
              }
            >
              <div className="allChaptersSingleTitle">
                <div>{this.props.chapters[0].title}</div>
              </div>
              <img
                className="allChaptersSingleImage"
                src={this.props.chapters[0].coverImage}
              />
              <p className="allChaptersSingleDescription">
                {this.props.chapters[0].description}
              </p>
            </div>
          ))}
        </div>
      )
    );
  }
}

const mapState = state => ({
  chapters: state.theBricks.chapters
});

const mapDispatch = dispatch => ({
  loadChapters: () => dispatch(loadChapters())
});

export default connect(mapState, mapDispatch)(AllBricksChapters);
