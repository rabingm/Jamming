// import logo from './logo.svg';
import React from "react";
import { Playlist } from "../Playlist/Playlist";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchReasults/SearchResults";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        { name: "PlaylistName1", artist: "PlaylistArtist1", album: "PlaylistAlbum1", id: 3 },
        { name: "PlaylistName2", artist: "PlaylistArtist2", album: "PlaylistAlbum2", id: 4 },
      ],
    };
    this.addTrack = this.addTrack.bind(this)
  }

  addTrack(track) {
    
    let tracks = this.state.playlistTracks;
    if(tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return console.log("Track already exist");
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
