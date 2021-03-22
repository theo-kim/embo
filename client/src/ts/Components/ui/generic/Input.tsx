import * as React from 'react';

export interface Props {
    type ?: string;
    id ?: number;
    onCommit ?: (event: string, key: number) => void;
    placeholder ?: string;
}
 
export interface State {
    
}
 
class Input extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() { 
        return ( <input placeholder={this.props.placeholder || "" } type={ this.props.type || "text" } onBlur={ this.onBlur } /> );
    }

    onBlur = (event : React.FocusEvent) => {
        console.log(this.props.id);
        if (this.props.onCommit)
            this.props.onCommit((event.target as HTMLInputElement).value, this.props.id);
    }
}
 
export default Input;