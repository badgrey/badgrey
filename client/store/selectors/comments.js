import { createSelector } from 'reselect';

export const commentsSelector = state => state.comments;

const sortComments = comments => {
  comments.sort((commentA, commentB) => {
    if (commentA.Likes.length < commentB.Likes.length) return 1;
    if (commentA.Likes.length > commentB.Likes.length) return -1;
    return 0;
  });
  return comments;
};

export const sortedCommentsSelector = createSelector(
  commentsSelector,
  sortComments
);
