import React, { Component } from "react";
import styles from './Button.module.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    };

    handleOnMouseEvent = () => {
        this.setState({ isHovered: true });
    };

    handleOffMouseEvent = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { number } = this.props;
        const { isHovered } = this.state;
        const classNameHover = {
            backgroundColor: isHovered ? "#8B8000" : "#5A5A5A",
            color: isHovered ? "#fff" : "#000",
            scale: isHovered ? '1.1' : null,
        }
        return (
            <button
                className={styles.number__container}
                style={classNameHover}
                onMouseEnter={this.handleOnMouseEvent}
                onMouseLeave={this.handleOffMouseEvent}
            >
                {number}
            </button>
        )
    };
};

export default Button;