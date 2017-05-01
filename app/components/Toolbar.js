import React, { Component } from 'react';

import Status from '../containers/AppStatus';
import Config from '../containers/AppConfig';
import styles from './toolbar.scss';
import { relay } from '../index';

const { BrowserWindow } = require('electron').remote;

// import * as ConfigureActions from '../actions/configure';

export default class Tools extends Component {
  props: {
    runScoreServerConnected?: boolean
  }

  state: {
    currentTool?: string
  }

  static defaultProps = {
    runScoreServerConnected: false
  }

  constructor() {
    super();
    this.state = {
      currentTool: null
    };
  }

  toggleTool = e => {
    const tool = e.currentTarget.name;
    const { currentTool: previousTool } = this.state;
    const currentTool = tool === previousTool ? null : tool;

    const win = BrowserWindow.fromId(1);
    const width = currentTool ? 500 : 200;
    win.setSize(400, width, true);

    this.setState({ currentTool });
  }

  retryServerConnection = () => {
    if (!this.props.runScoreServerConnected) {
      relay.connectToRSServer();
    }
  }

  render() {
    const { runScoreServerConnected } = this.props;
    const { currentTool } = this.state;

    return (
      <div>
        <div className={styles.toolbar_button_container} >
          <div className={styles.left_buttons}>
            <button
              name="server"
              className={runScoreServerConnected ? styles.connected : styles.disconnected}
              title={`${runScoreServerConnected ? 'Connected' : 'Not connected'} to RunScore Server`}
              onClick={this.retryServerConnection}
            >
              <i className="fa fa-flash" />
            </button>
          </div>
          <div>
            <button name="status" onClick={this.toggleTool}>
              <i className="fa fa-align-justify" />
            </button>
            <button name="config" onClick={this.toggleTool}>
              <i className="fa fa-wrench" />
            </button>
          </div>
        </div>
        <div className={styles.toolbar_panel_container}>
          { currentTool && (
            <div className="tool">
              { currentTool === 'status' && <Status />}
              { currentTool === 'config' && <Config />}
            </div>
          )}
        </div>
      </div>
    );
  }
}