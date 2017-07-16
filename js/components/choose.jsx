import React from 'react';

class Choose extends React.Component {
	repeat = () => {
		let choose = document.querySelector('.choose');
		let footer = document.querySelector('.footer');
		document.querySelector('.cover').style.display = 'none';
		document.querySelector('.small').style.display = 'flex';
		document.querySelector('.title').style.display = 'none';
		document.querySelector('.time').style.display = 'none';
		document.querySelector('.playerAndProgress').style.position = 'relative';
		choose.style.position = 'static';
		footer.style.position = 'static';
		choose.style.background = 'rgba(0,0,0,0.5)';
		footer.style.background = 'rgba(0,0,0,0.5)';
	}
	showArtist = () => {
		document.querySelector('.search').style.display = 'none';
		document.querySelector('.playlists').style.display = 'none';
		document.querySelector('.artistInfo').style.display = 'block';
		this.repeat();
	}
	showPlaylists = () => {
		document.querySelector('.search').style.display = 'none';
		document.querySelector('.playlists').style.display = 'block';
		document.querySelector('.artistInfo').style.display = 'none';
		this.repeat();
	}
	showSearch = () => {
		document.querySelector('.search').style.display = 'block';
		document.querySelector('.playlists').style.display = 'none';
		document.querySelector('.artistInfo').style.display = 'none';
		this.repeat();
	}
  render(){
    return <div className="choose">
        <div>
					<button onClick={this.showArtist}>
	          <i className="fa fa-user" aria-hidden="true"></i>
						<p>Artist</p>
	        </button>
        </div>
        <div>
					<button onClick={this.showPlaylists}>
	          <i className="fa fa-music" aria-hidden="true"></i>
						<p>Playlists</p>
	        </button>
        </div>
        <div>
					<button onClick={this.showSearch}>
	          <i className="fa fa-search" aria-hidden="true"></i>
						<p>Search</p>
	        </button>
        </div>
      </div>
  }
}

export default Choose
