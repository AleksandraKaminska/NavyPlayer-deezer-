import React from 'react';

// Redux
import store from './../store';
import { connect } from 'react-redux';
import {
  changePlaylistAction,
  prevTrackAction,
  changeTrackAction
} from './../actions/index.js';

const promise = new Promise((resolve, reject) => {
  true ? resolve("Stuff worked!") : reject(Error("It broke"));
});

class Playlist extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       data: {},
       picture: ''
     };
  }

  findPlaylist = () => {
    store.dispatch(changePlaylistAction(this.props.elem));
    promise.then(result => this.randomTrack(), err => console.log(err));
  }

  thisplaylist = () => {
    $.ajax({
        dataType: "jsonp",
        url :`https://api.deezer.com/playlist/${this.props.elem}?output=jsonp`,
        success : data => {
          this.setState({
            data: data,
            picture: data.picture_small
          })
        }
    });
  }

  componentDidMount() {
    this.thisplaylist();
  }

  randomTrack = () => {
    $.ajax({
        dataType: "jsonp",
        url :`https://api.deezer.com/playlist/${this.props.chosenPlaylist}?output=jsonp`,
        success : response => {
          const playlistTracks = response.tracks.data;
          const randomNumber = Math.floor(Math.random() * playlistTracks.length);
          store.dispatch(prevTrackAction(this.props.track));
          store.dispatch(changeTrackAction(playlistTracks[randomNumber]));
          this.searchArtist();
          this.searchTopTracks();
          this.searchAlbums();
          this.searchConcerts();
          this.searchSimilarArtists();
          DZ.player.playTracks([this.props.track.id]);
        }
    });
  }

  searchArtist = () => {
    $.ajax({
      dataType: "jsonp",
      url: `https://api.deezer.com/artist/${this.props.track.artist.id}?output=jsonp`,
      success: response => store.dispatch({ type: 'FIND_ARTIST', artist: response })
    });
  }

  searchAlbums = () => {
    $.ajax({
      dataType: "jsonp",
      url: `https://api.deezer.com/artist/${this.props.track.artist.id}/albums?output=jsonp`,
      success: response => {
        store.dispatch({ type: 'FIND_ALBUMS', albums: response.data })
      }
    });
  }

  searchTopTracks = () => {
    $.ajax({
        dataType: "jsonp",
        url :`https://api.deezer.com/artist/${this.props.track.artist.id}/top?output=jsonp`,
        success : response => store.dispatch({ type: 'FIND_TOP_TRACKS', topTracks: response.data })
    });
  }

  searchConcerts = () => {
    $.ajax({
      dataType: "json",
      url: `https://rest.bandsintown.com/artists/${this.props.track.artist.name}/events?app_id=NavyPlayer`,
      success: response => store.dispatch({ type: 'FIND_CONCERTS', concerts: response })
    });
  }

  searchSimilarArtists = () => {
    $.ajax({
        dataType: "jsonp",
        url :`https://api.deezer.com/artist/${this.props.track.artist.id}/related?limit=10&output=jsonp`,
        success : response => store.dispatch({ type: 'FIND_SIMILAR_ARTISTS', similar: response.data })
    });
  }

  render() {
    return <div onClick={this.findPlaylist}>
        <img src={this.state.picture} alt={this.state.data.title}/>
				<p>{this.state.data.title}</p>
      </div>
  }
}


const mapStateToProps = function(store) {
  return {
    chosenPlaylist: store.chosenPlaylist,
    track: store.track,
  };
};

export default connect(mapStateToProps)(Playlist);
