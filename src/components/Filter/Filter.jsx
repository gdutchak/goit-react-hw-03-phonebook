import PropTypes from 'prop-types';
import { Input, Label } from 'components/AddContacts/AddContact.styled';

export const Filter = ({ search, filter }) => (
    <Label>Find contacts by name
        <Input type="text" name='filter' onInput={search} value={filter} />
    </Label>
)

Filter.propTypes = {
    search: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}