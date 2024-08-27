import { useDispatch } from 'react-redux';

const Planbutton = ({ action, plan, children }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(action(plan))}>{children}</button>;
};

export default Planbutton;
