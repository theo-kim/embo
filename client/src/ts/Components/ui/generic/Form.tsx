import * as React from 'react';
import update from 'immutability-helper';

import Input from './Input';

export interface Props {
    onSubmit: (values: string[]) => void;
    label: string;
    children: React.ReactNode[] | React.ReactNode;
}
 
export interface State {
    data: string[]
}
 
class Form extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let c : React.ReactElement[] = React.Children.toArray(this.props.children) as React.ReactElement[];
        if (c.length < 1)
            throw "Generic.Menu component requires at least one HTMLInputElement child";
        c.forEach((child : React.ReactElement, index: number) => {
            if (child.type !== Input)
                throw "Generic.Menu component only allows for Generic.Input component children, check child at position: " + index;
        });
        this.state = {
            data: Array(c.length)
        } 
    }

    render() { 
        return (
            <div>
                { React.Children.toArray(this.props.children).map((child, index: number) => {
                    return React.cloneElement(child as React.ReactElement, { 
                        onCommit : this.onFormValueChange,
                        id: index
                    });
                }) }
                <button onClick={ this.onFormComplete } >{ this.props.label }</button>
            </div>
        );
    }

    onFormValueChange = (value : string, key: number) => {
        this.setState({
            data: update(this.state.data, { [key]: {  $set : value } })
        })
    }

    onFormComplete = () => {
        this.props.onSubmit(this.state.data);
    }
}
 
export default Form;