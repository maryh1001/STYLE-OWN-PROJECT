import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <BrowserRouter> 
    <Navigation />
    <Routes>
      {/* <Route exact path="/" component={HomeFeed}/> */}
      <Route exact path="/profile" component={ProfilePage}/>
      {/* <Route path="/" component={Error404} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
