import PropTypes, { shape } from 'prop-types';
import { Component } from 'react';
import { AddContacts } from 'components/AddContacts/AddContacts';
import { nanoid } from 'nanoid';


export class FormContacts extends Component {
    state = {
        name: '',
        number: '',
    }

    createContactItem = e => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    addNumberItem = e => {
        this.setState({ number: e.currentTarget.value })
    }
    addContactItem = (e) => {
        e.preventDefault();
        let data = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        }
        if (this.props.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
            alert(`${data.name} is already in contacts!`)

        } else {
            this.props.submit(data)
        }
        this.setState({ number: '', name: '' })
    }

    render() {
        const { name, number } = this.state;
        return (
            <AddContacts submit={this.addContactItem} contactName={this.createContactItem} valueName={name} contactNumber={this.addNumberItem} valueNum={number}></AddContacts>
        )
    }
}

FormContacts.propTypes = {
    submit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
}