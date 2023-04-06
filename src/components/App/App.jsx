import AppHeader from "../AppHeader/AppHeader"
import Main from "../Main/Main"
import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.App}>
            <AppHeader />
            <Main />
        </div>
    )
}

export default App