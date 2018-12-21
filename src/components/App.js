import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import Entries from "./pages/Entries";

class App extends Component {
    state = {
        categories: ["food","thoughts","romance"],
        entries: []
    };

    onEntryFormSubmit = (entry) => {
        //// Use the value of state to update the value of state ////
        this.setState((state) => {
            //// This is how you update the value of an array in react ////
            return { entries: [...state.entries, entry]};
        });
    };

    render() {
        const { categories, entries } = this.state;
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Route 
                            exact 
                            path="/category" 
                            render={(props) => {
                                return <CategorySelectionPage {...props} categories={categories} />
                            }} />
                        <Route 
                            exact 
                            path="/entry/new/:index" 
                            render={(props) => {
                                return <NewEntryPage {...props} categories={categories} onEntryFormSubmit={this.onEntryFormSubmit} />
                            }} />
                        <Route
                            exact
                            path="/entries"
                            render={(props) => {
                                return <Entries {...props} entries={entries} />
                            }}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    };

    ///// All state-based SPA ////
    // state = { location: "home" }

    // getPage() {
    //     const { location } = this.state;

    //     /// Switch is a far cleaner method than multiple if statements ///
    //     switch(location) {
    //         case "home":
    //             return <HomePage />;
    //         case "category":
    //             return <CategorySelectionPage />;
    //         case "entry":
    //             return <NewEntryPage />;
    //         default:
    //             return null;
    //     };
    // };

    // onChangeLocation = (location) => {
    //     this.setState({ location });
    // }

//     render() {
//         return(
//             <div>
//                 <button onClick={() => this.onChangeLocation("home")}>Home</button>
//                 <button onClick={() => this.onChangeLocation("category")}>Category</button>
//                 <button onClick={() => this.onChangeLocation("entry")}>New Entry</button>
//                 {this.getPage()}
//             </div>
//         );
//     };
};

export default App;