import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Segment,
  Button,
} from "semantic-ui-react";

import {loadUnitData} from "./toolsActions";
import {showContextMenu} from "features/contextMenus/contextMenuActions";

const actions = { loadUnitData, showContextMenu };

class Tools extends Component {

  onShowContextMenuClicked = () => {
    this.props.showContextMenu(600, 200, "TestContextMenu", {text : "Blah"});
  }

  render() {
    const {loadUnitData} = this.props;

    return(
      <Segment attached="buttom">
        <Button onClick={loadUnitData}>Reload Unit Data</Button>
        <Button primary onClick={this.onShowContextMenuClicked}>Show Context Menu</Button>
      </Segment>
    )
  }
}

export default connect(null, actions)(Tools);
