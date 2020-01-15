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
            <div
              className="allChaptersSingleChapter"
              key={chapter.id}
              onClick={() => this.handleChapterClick(chapter.id, chapter.title)}
            >
              <h2 className="allChaptersSingleTitle">{chapter.title}</h2>
              <img
                className="allChaptersSingleImage"
                src={chapter.coverImage}
              />
              <p className="allChaptersSingleDescription">
                {chapter.description}
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
