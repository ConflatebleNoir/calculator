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
        const { number, equal, operator } = this.props;
        const { isHovered } = this.state;
        const classNumber = {
            backgroundColor: "#D3D3D3",
            fontSize: isHovered ? '24px' : null,
        };
        const classOperator = {
            backgroundColor: "#FFF44F",
        };
        const classEqual = {
            backgroundColor: "#FFCCCB",
            width: "108px",
            borderRadius: "20px",
        };

        return (
            <>
                {
                    number ? (
                        <button
                            className={styles.btn__container}
                            style={classNumber}
                            onMouseEnter={this.handleOnMouseEvent}
                            onMouseLeave={this.handleOffMouseEvent}
                        >
                            {number}
                        </button>
                    ) : null
                }
                {
                    operator ? (
                        <button
                            className={styles.btn__container}
                            style={classOperator}
                            onMouseEnter={this.handleOnMouseEvent}
                            onMouseLeave={this.handleOffMouseEvent}
                        >
                            {operator}
                        </button>
                    ) : null
                }
                {
                    equal ? (
                        <button
                            className={styles.btn__container}
                            style={classEqual}
                            onMouseEnter={this.handleOnMouseEvent}
                            onMouseLeave={this.handleOffMouseEvent}
                        >
                            {equal}
                        </button>
                    ) : null
                }
            </>
        )
    };
};

export default Button;