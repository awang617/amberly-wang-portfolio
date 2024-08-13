import logo from '../logo.svg';
import './App.css';
import Navigation from '../navigation/Navigation';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about-me",
		element: <AboutMe />
	}
]);

function App() {
  return (
    <div className="App">
      <header className="">
		<Navigation />
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
