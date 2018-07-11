import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTolist } from '../actions/index'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            addr: ''
        };
        this.formReset= React.createRef();

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addTolist(this.state));
        document.getElementById('ContactForm').reset();
        this.props.history.push('/table');
    }

    render() {

        const attribute = [
            { label: 'First Name', name: 'fname' },
            { label: 'Last Name', name: 'lname' },
            { label: 'Mobile', name: 'phone' },
            { label: 'Email', name: 'email' },
            { label: 'Address', name: 'addr' }
        ]
        return (
            <form id='ContactForm' ref={this.formReset} onSubmit={this.handleSubmit}>
                {attribute.map(item => {
                    return (<div key={item.name} className='row'>
                        <div className='col-25'>
                            <label>
                                {item.label}:
                    </label>
                        </div>
                        <div className='col-75'>
                            <input type="text" name={item.name} placeholder={item.label} value={this.state.value} onChange={this.handleChange} required />
                        </div>
                    </div>

                    )
                })}
                <div className='row'>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default connect()(Form)