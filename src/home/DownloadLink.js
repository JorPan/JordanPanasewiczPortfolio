import React, { Component } from "react";

export default class DownloadLink extends Component {
  render() {
    return (
      <a class="linky" href={this.props.src} download target="_blank">
        {this.props.children}
      </a>
    );
  }
}
