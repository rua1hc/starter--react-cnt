import React, { Component } from "react";

class CCounter extends Component {
    state = {
        value: this.props.value,
        imgUrl: "https://picsum.photos/200",
        // tags: [],
        tags: ["tag1", "tag2", "tag3"],
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold",
    };

    // constructor() {
    //     super();
    //     this.handleAdd = this.handleAdd.bind(this);
    // }
    handleAdd = (product) => {
        // console.log("Add clicked", this);
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return (
            <div>
                {/* <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul> */}
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.state.value}
                </span>
                <button
                    onClick={() => this.handleAdd({ id: 1 })}
                    className="btn btn-secondary btn-sm"
                >
                    Add
                </button>
            </div>
        );
    }

    render() {
        console.log("props", this.props);
        let classes = this.getBadgeClasses();

        return (
            <div>{this.renderTags()}</div>
            // // <React.Fragment>
            // <div>
            //     <h1>Hello Mimi!</h1>
            //     <img src={this.state.imgUrl} />
            //     {/* <span>{this.formatCount()}</span>
            //     <span style={this.styles} className={classes}>
            //         {this.state.value}
            //     </span>
            //     <button className="btn btn-secondary btn-sm">Add</button>{" "} */}
            //     <ul>
            //         {this.state.tags.map((tag) => (
            //             <li key={tag}>{tag}</li>
            //         ))}
            //     </ul>
            // </div>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 badge-";
        // classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state.value;
        return value === 0 ? 1 : value;
    }
}

export default CCounter;
