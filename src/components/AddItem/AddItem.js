import React, { Component } from "react";

import "./AddItem.css";

export default class AddItem extends Component {
    state = {
        label: ""
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.label) {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ""
            })
        } else {
            this.setState({
                label: ""
            })
        }
};

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" className="form-control"
                    value={this.state.label} onChange={this.onLabelChange} placeholder="Whats needs to be done" />
                <button onClick={() => this.props.onItemAdded} className="btn btn-primary">
                    Add Item
                </button>
            </form>
        );
    }
}