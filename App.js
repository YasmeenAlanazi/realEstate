import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import propertyList from './propertyList';
import propertyDetail from './propertyDetail';
import propertyForm from './propertyForm';

const App = () => (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Property</Link>
        </nav>
        <Route path="/" exact componant={propertyList} />
        <Route path="/property/:id" componant={propertyDetail} />
        <Route path="/add" componant={propertyForm} />
        <Route path="/edit/:id" componant={propertyForm} />
    </Router>
);

export default App;
