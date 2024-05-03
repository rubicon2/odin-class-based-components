import { useState } from 'react';

export default function TodoFunctional({ value, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="list-item">
      {isEditing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      ) : (
        <li>{value}</li>
      )}

      <button type="button" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Resubmit' : 'Edit'}
      </button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
