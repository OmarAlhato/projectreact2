import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div>
           
               {this.props.name}
               {this.props.age}
               {this.props.tittle}



            </div>
        )
    }
}

export default Nav
