import AppHeader from "../AppHeader/AppHeader"
import Main from "../Main/Main"
import styles from './App.module.css'
import React, { Component } from "react"

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <AppHeader />
                <Main />
            </div>
        )
    };
};

export default App;