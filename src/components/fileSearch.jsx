import React, { Component } from "react";
import "../css/fileSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FileSearch extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <div className="tile" type={this.props.type}>
        <h5>
          <b>{this.props.type}</b>
        </h5>
        <hr />
        Geben Sie hier die Lieferscheinnummer ein und klicken Sie auf{" "}
        <i>Suchen</i>, um den Prozess zu starten.
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="z.B. 'LS8347'"
            aria-label="Lieferschein"
            aria-describedby="basic-addon2"
            onChange={(event) =>
              this.props.setLieferscheinNummer(event.target.value)
            }
          />
          <div class="input-group-append">
            <button id="searchLieferscheinButton" class="btn btn-outline-secondary" type="button" onClick={this.props.test}>
              <FontAwesomeIcon icon="search" /> Suchen 
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FileSearch;
