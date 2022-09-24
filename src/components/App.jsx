import { Component } from "react";
import { FormContacts } from './FormContacts/FormContacs';
import { Filter } from "./Filter/Filter";
import { ListContacts } from "./ListContacts/ListContacts";

const KEY_LOCALE_CONTACTS = 'date-contacts';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }

  componentDidMount() {
    const valueLocale = localStorage.getItem(KEY_LOCALE_CONTACTS)
    if (valueLocale !== null) {
      this.setState({
        contacts: [...JSON.parse(valueLocale)]
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY_LOCALE_CONTACTS, JSON.stringify(this.state.contacts))
    }
  }

  onFilterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  }
  onSearchContact = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const valueFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(valueFilter))
  }

  deleteContacts = name => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.name !== name) }))
  }
  submitContacts = data => {
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts]
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.onSearchContact();

    return (
      <div style={{ padding: 40 }}>
        <h1>Phonebook</h1>
        <FormContacts submit={this.submitContacts} contacts={contacts}></FormContacts>
        <Filter search={this.onFilterContacts} filter={filter}></Filter>
        <h2>Contacts</h2>
        <ListContacts onDelete={this.deleteContacts} onSearch={visibleContacts}></ListContacts>
      </div >
    );
  }
}
