import  { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [show ,setShow]=useState("") ;

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(name)  ;
    console.log('Submitted name:', name);
    // You can perform any submission logic here
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    <h1>{show}</h1>
    </>
  );
};

export default MyForm;
