import React, { Component } from 'react';

class MainBody extends Component {
  state = {}
  render() {
    return (
      <div>
        <div class="alert alert-warning mx-3 my-4" role="alert">
          Body {'>'} Raw {'>'} JSON
        </div>
        <div class="mx-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>

      </div>
    );
  }
}

export default MainBody;