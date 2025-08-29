import React from 'react';

const Checklist = () => {
  const items = [
    'Use meaningful names',
    'Comment your code judiciously',
    'Keep functions small and focused',
    'Avoid repetitive code',
    'Write unit tests'
  ];

  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;