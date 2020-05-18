import React from 'react';
import ReactDom from 'react-dom'
import Amplify from "aws-amplify";
import App from "./App.js"
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

class Index extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

ReactDom.render(<Index />, document.getElementById('app'))