import { render, screen } from '@testing-library/react';
import Home from '../containers/Home.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Provider from '../context/provider.js'


test('render correctly', () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }
  ]);
  
  render(
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );

  // const linkElement = screen.getByText(/Hola/i);
  // expect(linkElement).toBeInTheDocument();
});
