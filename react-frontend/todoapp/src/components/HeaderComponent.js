import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark style-header">
                    <div className="navbar-brand">To Do App</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
