import * as React from 'react';
import io from 'socket.io-client';

// this module is the base App component

interface IProps { }

interface IState { }

class App extends React.Component<IProps, IState> {
    constructor(props : IProps) {
        super(props);
    }

    render() {
        return (<div></div>);
    }

    componentDidMount() {
        const sock = io();
        sock.on("connect", () => {
            console.log("successfully connected: " + sock.id);
        })

        sock.on("welcome", (msg) => {
            console.log(msg);
        });
    }
}

export default App;