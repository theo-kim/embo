import * as React from 'react';

export interface Props {
    label: string;
    onClick: () => void;
}
 
export interface State {
    
}
 
class Button extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (<button onClick={ this.props.onClick }>{this.props.label}</button>);
    }
}
 
export default Button;