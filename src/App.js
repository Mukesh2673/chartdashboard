import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes, PrivateRoute, PublicRoute } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Private Routes */}
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute>{route.element}</PrivateRoute>}
          >
            {route.children &&
              route.children.map((child) => (
                <Route key={child.path} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;