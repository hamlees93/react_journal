import React, {Component} from "react";

class Entries extends Component {
    render() {
        console.log(this.props.entries);
        const entries = this.props.entries;
        return(
            <div>
                <div>
                    <h1>All the entries</h1>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Content</th>
                    </tr>
                    </thead>
                    <tbody>
                    {entries.map((entry, index) => {
                        return (
                            <tr>
                                {/* Index is not best practice, but will do for now */}
                                <td key={entry.category + Number(index)}>{entry.category}</td>
                                <td key={entry.entry}>{entry.entry}</td>
                            </tr> 
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Entries