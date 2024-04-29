import { Route, Routes } from 'react-router-dom';

import { RoutesPath } from './RoutesPath';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesPath.Root} element={<></>}></Route>
    </Routes>
  );
};

export default Routes;
