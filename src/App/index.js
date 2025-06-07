import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
// import { TodoProvider } from '../components/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {

    return (
        // <TodoProvider>
            <AppUI />
        // </TodoProvider>
    )

}

export default App;