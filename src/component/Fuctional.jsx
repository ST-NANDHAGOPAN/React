import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state.counter.value);

  // Equivalent of componentDidMount
  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function (equivalent of componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Equivalent of componentDidUpdate
  useEffect(() => {
    console.log('Component updated');
  }, [count]);

  return (
    <div className="centered-container">
        <br />
        <h1>Lifecycle Of Functional Component</h1>
        <br />
        <h1>Count: {count}</h1>
        <h1>REDUX IS UPTATING :{state}</h1>
        <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      
     
     
    </div>
  );
}

export default FunctionalComponent;