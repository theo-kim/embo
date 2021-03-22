import * as React from 'react';

export interface Props {
    alignment ?: "left" | "right" | "center"
}
 
export interface State {
    
}
 
class Container extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() { 
        let className = "container";
        if (this.props.alignment) className += " " + this.props.alignment;
        else className += " left";

        return (<div className={ className }>{ this.props.children }</div>);
    }
}
 
export default Container;