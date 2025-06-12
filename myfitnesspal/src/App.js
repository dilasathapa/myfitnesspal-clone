import { useSelector } from 'react-redux';
import './App.css';
import AllRoutes from './Components/Routes/AllRoutes';
import { Navbar } from './Components/Routes/Navbar';


function App() {
  const auth = useSelector((data) => {
    return data.auth;
  })
  console.log(auth);
  return (
    <div className="App">
      {auth.isLogin && <Navbar />}
      <AllRoutes />
    </div>
  );
}

export default App;
