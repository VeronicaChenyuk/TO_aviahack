import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div>
        <div class="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Заменить самолет
    </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#">С-Check "Ютэир" 737-300</a>
            <a class="dropdown-item" href="#">A-Check "Частный" King Air A90</a>
            <a class="dropdown-item" href="#">D-Check "Аэрофлот" 737-800</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Settings;
