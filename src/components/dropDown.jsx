import React, { Component } from 'react'

class DropDown extends Component {
  state = {}
  render() {
    return (
        <div class="mainBar d-flex mt-4 ms-4">
          <button class="btn btn-success dropdown-toggle px-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
            GET
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">POST</a></li>
            <li><a class="dropdown-item" href="#">PUT</a></li>
            <li><a class="dropdown-item" href="#">DELETE</a></li>
          </ul>

          <form class="d-flex">
            <input class="form-control mx-5" type="search" placeholder="Enter request URL" size="125"/>
            <button class="btn btn-primary px-4 py-2" type="submit">Send</button>
          </form>

        </div>
    );
  }
}

export default DropDown;