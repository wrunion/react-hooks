import React from 'react';
import useInputState from './../hooks/useInputState';

export default function HooksForm() {
  // const [email, setEmail] = useState("");
  const [email, setEmail, reset] = useInputState("");

  return (
    <div>
      <h1>The value is: {email}</h1>
      <div className="ui input">
        <input type="text" value={email} onChange={setEmail} />
      </div><br /><br />
      <button onClick={reset} className="ui button basic blue">Reset</button>
    </div>
  );
}