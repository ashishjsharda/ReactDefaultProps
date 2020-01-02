import React, { Component } from 'react';

class App extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>

        <h1> This is frm App</h1>
        <h2>{this.props.headerProp}</h2>
        <h2>{this.props.footer}</h2>
            </React.Fragment>

          );
    }
}
 
App.defaultProps={
    headerProp:'This is coming from header',
    footer:'This is coming from footer'
}
export default App;