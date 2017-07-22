import {combineReducers} from 'redux';

// Reducers
import ConcertsReducer from './reducer-concerts';
import ArtistReducer from './reducer-artist';
import ChosenPlaylistReducer from './reducer-chosen-playlist';
import SearchTracksReducer from './reducer-search-tracks';
import AutocompleteReducer from './reducer-autocomplete';
import TrackReducer from './reducer-track';

const reducers = combineReducers({
    concerts: ConcertsReducer,
    artistInfo: ArtistReducer,
    chosenPlaylist: ChosenPlaylistReducer,
    searchTracks: SearchTracksReducer,
    autocompleteValue: AutocompleteReducer,
    track: TrackReducer
});

export default reducers;