import React, { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../util/types/custom';

interface CreateUserProps {
  setCurrUsers: React.Dispatch<SetStateAction<User[]>>;
}

export default function CreateUser({ setCurrUsers }: CreateUserProps) {
  const [name, setName] = useState<string>('');
  const [toxicTrait, setToxicTrait] = useState<string>('');
  const [toxicTraits, setToxicTraits] = useState<string[]>([]);

  const navigate = useNavigate();

  const addToxicTrait = () => {
    setToxicTraits((prev) => [toxicTrait, ...prev]);
    setToxicTrait('');
  };

  const addUser = () => {
    setCurrUsers((prev) => [
      { id: uuidv4(), name, traits: toxicTraits, url: './empty.jpg' },
      ...prev,
    ]);

    navigate('/home');
  };

  return (
    <form style={{ width: '250px', display: 'flex', flexDirection: 'column' }}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <div style={{ display: 'flex' }}>
        <input
          placeholder="Toxic trait"
          value={toxicTrait}
          onChange={(e) => setToxicTrait(e.target.value)}
        />
        <button onClick={addToxicTrait} value="Add toxic trait" type="button">
          Add toxic trait
        </button>
      </div>
      <ul>
        {toxicTraits.length !== 0 &&
          toxicTraits.map((trait) => <li>{trait}</li>)}
      </ul>
      <button onClick={addUser} value="submit" type="button">
        Submit
      </button>
    </form>
  );
}
