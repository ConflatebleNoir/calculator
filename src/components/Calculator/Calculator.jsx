import React, { Component } from "react";
import styles from './Calculator.module.css'
import Button from "../Button/Button";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0',
            input: '',
        };
    };

    handleIncrement = (value) => {
        this.setState((prevState) => ({
            input: prevState.input + this.result,
        }));
    };


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.display}>
                    <input className={styles.input} type="text" value={this.result} disabled />
                    <Button color={"8B8000"} number={"C"} />
                </div>
                <div className={styles.buttons}>
                    <div className={styles.numbers}>
                        <Button number={7} />
                        <Button number={8} />
                        <Button number={9} />
                        <Button number={4} />
                        <Button number={5} />
                        <Button number={6} />
                        <Button number={3} />
                        <Button number={2} />
                        <Button number={1} />
                        <Button number={0} />
                        <Button number={"="} />
                    </div>
                    <div className={styles.operators}>
                        <Button number={"+"} />
                        <Button number={"-"} />
                        <Button number={"÷"} />
                        <Button number={"X"} />
                    </div>
                </div>
            </div>
        )
    };
    ;
}

export default Calculator;