import { createSelector } from 'reselect';

export const artistsSelector = state => state.artists;

const sortArtists = artists => {
  artists.sort((artistA, artistB) => {
    if (artistA.name < artistB.name) return -1;
    if (artistA.name > artistB.name) return 1;
    return 0;
  });
  return artists;
};

export const sortedArtistsSelector = createSelector(
  artistsSelector,
  sortArtists
);
