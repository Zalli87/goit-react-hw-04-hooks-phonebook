// import { useState } from 'react';

// function ContactForm() {

//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');

//   const handleChange = event => {
//         const { name, value } = event.currentTarget;
//         switch (name) {
//             case 'name':
//                 setName(value);
//                 break;
//             case 'number':
//                 setNumber(value);
//                 break;
//             default:
//                 return;
//       };
//     };

//     reset = () => {
//         setName('');
//         setNumber('');
//     };

//   const  handleSubmit = event => {
//         event.preventDefault();
//         onSubmit(name, number);
//         reset();
//     };

//           return (
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <p>Name:</p>
//                     <input
//                         type="text"
//                         value={name}
//                         name="name"
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     <p>Number:</p>
//                     <input
//                         type="text"
//                         value={number}
//                         name="number"
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <button type="submit">Add contact</button>
//             </form>
//         );

// }

// export default ContactForm;
