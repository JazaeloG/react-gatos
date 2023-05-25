import React, { useState } from 'react';

const CreateGato = () => {
  const [formState, setFormState] = useState({
    name: '',
    tipo: '',
    ataque: '',
    defensa: '',
    counter: '',
    strong: '',
    image: ''
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Un nombre para Gatomem"
          />
          <input
            className="mb2"
            value={formState.tipo}
            onChange={(e) =>
              setFormState({
                ...formState,
                tipo: e.target.value
              })
            }
            type="text"
            placeholder="El tipo de gatomem"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateGato;