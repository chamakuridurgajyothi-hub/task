import React from 'react';
import { useState } from 'react';
import LoadFact from './loadFact';
import { useNavigate } from 'react-router-dom';

const Alldetails = () => {
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  return (
    <div style={{ margin: 10 }}>
      <h3 style={{ color: 'blue', disply: 'flex', justifyContent: 'center' }}> Cat Fact App</h3>
      <div><LoadFact setUpdate={setUpdate} /></div>
    </div>
  );

}
export default Alldetails;