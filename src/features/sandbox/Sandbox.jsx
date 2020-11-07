import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrement, increment } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <div>
      <h3>the data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(10))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(5))}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
    </div>
  );
};

export default Sandbox;
