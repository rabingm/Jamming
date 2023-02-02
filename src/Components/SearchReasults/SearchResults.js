import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./SearchResults.css";

export class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <div className="SearchResults">
          <h2>Results</h2>
          <TrackList
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={false}
          />
        </div>
      </div>
    );
  }
}
