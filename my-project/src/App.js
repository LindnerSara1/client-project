import './App.css';
import React from 'react';
// import { Checkbox } from '';
import Login from './components/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Tasks from './components/Tasks';
import Projects from './components/Projects';
import Main from './components/Main';
import Home from './components/Home';
import NewProject from './components/NewProject';
import { UserContextProvider } from './context/User.context';

function App() {
  return (
    <Router>
      <UserContextProvider>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="login" element={<Login />}></Route>
            <Route path="signUp" element={<SignUp />}></Route>
            <Route path="main" element={<Main />}></Route>
            <Route path="projects" element={<Projects />}>
              {/* <Route path="newProject" element={<NewProject/>}/> */}
            </Route>
            <Route path="/projects/newProject" element={<NewProject />}></Route>

            <Route path="/tasks" element={<Tasks />}></Route>
          </Routes>
      </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
