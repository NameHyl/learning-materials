import { BrowserRouter as Router, Navigate, NavLink, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <Router>
            <NavLink to='/First'>跳转</NavLink>
            <Routes>
                <Route path='/' element={<Navigate to="/First" />}></Route>
                <Route path="/First" element={<First />}></Route>
            </Routes>
        </Router>
    )
}

const app = document.querySelector('#app');
const element = <App />;
ReactDOM.render(element, app);