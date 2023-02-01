import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
  render() {

    const tracks = this.props.tracks;
    return (
      <div className="TrackList">
        {tracks.map(track =>{
            return <Track track = {track}
                        key = {track.id}
            />
        })}
      </div>
    );
  }
}
