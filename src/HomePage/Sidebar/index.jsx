import React from 'react';

const Sidebar = ({ labels }) => (
  <div>
    {labels.map(label => <p>{label}</p>)}
  </div>
);

export default Sidebar;
