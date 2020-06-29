import React, { useState } from 'react';

export default function HooksForm() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div>
      <h1>The value is: {email}</h1>
      <div className="ui input">
        <input type="text" value={email} onChange={handleChange} />
      </div><br /><br />
      <button onClick={() => setEmail("")} className="ui button basic blue">Reset</button>
    </div>
  );
}