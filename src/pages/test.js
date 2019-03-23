import React, { Component } from 'react'
import printers from '../data/printers'

export default class test extends Component {
  render() {
    return (
      <div>
        <div>
          {JSON.stringify(printers)}
        </div>
      </div>
    )
  }
}
