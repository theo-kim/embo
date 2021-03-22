import * as React from 'react';

import * as Generic from '../ui/generic';

export interface Props {
    socket: SocketIOClient.Socket  
}
 
export interface State {
    
}
 
class Intro extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() { 
        // menu to start the game (initial options, etc.)
        let menuStart = (
            <Generic.Menu alignment="center">
                <Generic.Button onClick={this.onNewGame} label="New Game"/>
                <Generic.Button onClick={this.onExistingGame} label="Join Existing Game"/>
                <Generic.Button onClick={this.onSettings} label="Settings"/>
                <Generic.Button onClick={this.onAbout} label="About"/>
            </Generic.Menu>
        );

        let newGame = (
            <Generic.Form label="Create Game" onSubmit={this.onGameCreated}>
                <Generic.Input />
            </Generic.Form>
        )

        let joinGame = (
            <Generic.Form label="Join Room" onSubmit={console.log}>
                <Generic.Input />
            </Generic.Form>
        );

        return (
            <Generic.Container alignment="center">
                <h2>Intro</h2>
                { menuStart }
            </Generic.Container>
        );
    }

    onNewGame = () => { alert("TODO") } // TODO
    onExistingGame = () => { alert("TODO") } // TODO
    onSettings = () => { alert("TODO") } // TODO
    onAbout = () => { alert("TODO") } // TODO

    onGameCreated = () => { alert("TODO") } // TODO
}
 
export default Intro;