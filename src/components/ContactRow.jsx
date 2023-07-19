

export default function ContactRow({setSelectedContactId, contact }) {
    // console.log(contact.id)
    return (
      <tr
      onClick={() => {
        setSelectedContactId(contact.id);
        console.log(contact.id)
      }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

