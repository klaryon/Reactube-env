import React, { Component } from "react";
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {termFromSearchBar:''} //initially we have an empty input as the current state
        
        this.handleChange = this.handleChange.bind(this) //imperative to bind functions while using classes, so `this` works in callback
        this.handleSubmit = this.handleSubmit.bind(this) //imperative to bind functions while using classes, so `this` works in callback
    }

    handleSubmit = (event) => {
        const termFromSearchBar = this.state.termFromSearchBar; //other way---> const { termFromSearchBar } = this.state;
        const onHandleSubmitForm = this.props.onHandleSubmitForm; //other way---> const { onSubmitForm } = this.props; 
        onHandleSubmitForm(termFromSearchBar);
        event.preventDefault(); // removes POST data that's std in a query parameter
    }

    handleChange = (event) => {
        this.setState({termFromSearchBar: event.target.value}) //while writing in form input, onChange event triggers and it's set to this.state
    }

    //I'm returning both the handleSubmit and form.control **value** through props
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formSearch">
                    {/* <Form.Label>Video Search</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter video" onChange={this.handleChange} value={this.state.termFromSearchBar}/> 
                </Form.Group>
            </Form>
        )
    }
}

export default SearchBar;

//https://es.reactjs.org/docs/forms.html
