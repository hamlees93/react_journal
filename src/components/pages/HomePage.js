import React, {Component} from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>HomePage</h1>
                <Link to="/category">
                    <button>New Entry</button>
                </Link>
                <Link to="/entries">
                    <button>View all entries</button>
                </Link>
            </div>
        );
    };
};

export default HomePage;