import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Layout />
                </div>

            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
