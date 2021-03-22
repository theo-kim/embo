import * as React from 'react';

export interface Props {
    
}
 
export interface State {
    
}
 
class Connecting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (<div>Connecting to the server</div>);
    }
}
 
export default Connecting;