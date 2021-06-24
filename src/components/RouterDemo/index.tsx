import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Home from './Home'

const RouterDemo = () => {
    const id = "123"
    return (
        <div>
            <Router>
                <ul>
                    <li><NavLink to="/page1">page1</NavLink></li>
                    <li><NavLink to="/page2">page2</NavLink></li>
                    <li><NavLink to={"/page3/"+id}>page3</NavLink></li>
                </ul>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3/:id" component={Page2} />
                <Route path="/home" component={Home} />
            </Router>
        </div>
    )
}

export default RouterDemo