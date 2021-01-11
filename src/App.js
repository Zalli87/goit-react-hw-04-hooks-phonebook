import { useEffect, useState } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
};

function App() {
    const [contacts, setContacts] = useLocalStorage('concacts', [
        { id: uuidv4(), name: 'Rosie Simpson', number: '995-54-37' },
        { id: uuidv4(), name: 'Hermione Kline', number: '535-15-15' },
        { id: uuidv4(), name: 'Eden Clements', number: '333-13-13' },
        { id: uuidv4(), name: 'Annie Copeland', number: '225-25-25' },
    ]);
    const [filter, setFilter] = useState('');

    const getConcactNames = () => {
        return contacts.reduce((allNames, { name }) => {
            allNames.push(name.toLowerCase());
            return allNames;
        }, []);
    };

    const addContact = (name, number) => {
        const names = getConcactNames();
        if (names.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts.`);
            return;
        }

        const id = uuidv4();
        const contact = [{ id, name, number }];

        setContacts(state => [...contact, ...state]);
    };

    const filterChange = e => {
        const { value } = e.currentTarget;
        setFilter(value);
    };

    const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    const tolowerCaseFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(tolowerCaseFilter),
    );

    return (
        <Container>
            <ContactForm onSubmit={addContact} />
            <Filter value={filter} onChange={filterChange} />
            <ContactList
                contacts={visibleContact}
                onDeleteContact={deleteContact}
            />
        </Container>
    );
}

export default App;
