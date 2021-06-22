import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'

const RouterDemo = () => {
    return (
        <div>
            <Router>
                <ul>
                    <li><NavLink to="/page1">page1</NavLink></li>
                    <li><NavLink to="/page2">page2</NavLink></li>
                </ul>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Router>
        </div>
    )
}

export default RouterDemo