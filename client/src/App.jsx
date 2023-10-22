import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
import theme from '../theme';
import LoginForm from './components/ReactHookForm/Login.jsx'
import SignUpForm from './components/Controlled/SignUp';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div style={{width: '600px', margin: '0 auto 50px'}}>
          <SignUpForm/>
          <LoginForm/>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;

// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

// import Shop from './components/shop.component';
// import Product from './components/product.component';



// function App() {
//   return (
//     <Router>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <Link class="navbar-brand" to="/">Todo Application</Link>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item active">
//               <Link class="navbar-brand" to="/">Home</Link>
//              </li>
//              <li class="nav-item active">
//               <Link class="navbar-brand" to="/add">Add Todo</Link>
//              </li>
//           </ul>
//         </div>
//       </nav>
//       <Routes>
//         <Route path='/' Component={TodoLists} />
//         <Route path='/edit/:id' Component={EditTodo} />
//         <Route path='/add' Component={AddTodo} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
