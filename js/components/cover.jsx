import React from 'react';

class Cover extends React.Component {
  render(){
    const CoverStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${this.props.track.album.cover_big})`
    }
    return <div className="cover" style={CoverStyle}></div>
  }
}

export default Cover
