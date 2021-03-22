import * as React from 'react';
import io from 'socket.io-client';

import * as Screen from './screen';

// this module is the base App component

interface IProps { }

interface IState {
    sock: SocketIOClient.Socket,
    connected: boolean,
    ready: boolean,
    game: boolean
}

class App extends React.Component<IProps, IState> {
    constructor(props : IProps) {
        super(props);
        this.state = {
            sock: null,
            connected: false,
            ready: false,
            game: false
        }
    }

    render() {
        let screen : JSX.Element;
        
        // When the game starts, load the game screen
        if (this.state.game) {
            screen = <Screen.Game socket={ this.state.sock } />
        }
        // When game ready, load the game setup screen
        else if (this.state.ready) {
            screen = <Screen.GameOptions socket={ this.state.sock }/>
        }
        // TODO: When the game ends, reload the intro screen
    
        // After connected, load the intro screen
        else if (this.state.connected && this.state.sock !== null) {
            screen = <Screen.Intro socket={ this.state.sock }/>;   
        }
        // Otherwise show the loading screen
        else {
            screen = <Screen.Connecting />
        }

        return screen;
    }

    componentDidMount() {
        const sock = io(); // client socket initialization
        sock.on("connect", () => {
            console.log("successfully connected: " + sock.id);
            setTimeout(() => {
                this.setState({ 
                    sock: sock,
                    connected: true
                }); // update state with socket
            }, 1000);
        }); // Ensure that the client has successfully connected
    }
}

export default App;