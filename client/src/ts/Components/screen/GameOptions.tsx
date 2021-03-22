import * as React from 'react';

export interface Props {
    socket: SocketIOClient.Socket
}
 
export interface State {
    
}
 
class GameOptions  extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return <div>GAME OPTIONS</div>;
    }
}
 
export default GameOptions;