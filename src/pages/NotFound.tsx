import { useLocation } from 'react-router-dom';

export const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h2>404</h2>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
};
