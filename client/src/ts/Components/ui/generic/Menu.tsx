import * as React from 'react';
import { Props as ButtonProps } from './Button';

export interface Props {
    children: React.ReactElement<ButtonProps>[] | React.ReactElement<ButtonProps>;
    alignment ?: "center" | "left" | "right";
}
 
export interface State {
    
}
 
class Menu extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
        <div className={ "menu container " + ( this.props.alignment || "left" ) }>{
            this.props.children }
        </div>);
    }
}
 
export default Menu;