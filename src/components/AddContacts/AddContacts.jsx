import PropTypes from 'prop-types';
import { Input, Label, Button } from './AddContact.styled';

export const AddContacts = ({ submit, contactName, valueName, contactNumber, valueNum }) => (
    <form onSubmit={submit}>

        <Label> Name
            <Input type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required onInput={contactName} value={valueName} />
        </Label>
        <Label>Number
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required onInput={contactNumber} value={valueNum}
            />
        </Label>
        <Button type="submit">Add contact</Button>
    </form>)

AddContacts.propTypes = {
    submit: PropTypes.func.isRequired,
    contactName: PropTypes.func.isRequired,
    valueName: PropTypes.string.isRequired,
    contactNumber: PropTypes.func.isRequired,
    valueNum: PropTypes.string.isRequired,
}