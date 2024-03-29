import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/admin/Dashboard';
import Setting from './components/admin/Setting';
import About from './components/front/About';
import Home from './components/front/Home';
import Login from './components/front/Login';
import FrontLayout from './components/layout/FrontLayout';
import AdminLayout from './components/layout/AdminLayout';
import PrivateRoute from './components/route/PrivateRoute';
import { RecoilRoot } from 'recoil';
import NoPage from './components/NoPage';
import Store from './components/front/Store';
import Manage from './components/admin/Manage';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Switch>

            <Route path='/login' component={Login}/>

            <Route exact path='/admin/:path?'>
              <AdminLayout>
                <Switch>
                  
                  {/*
                  <PrivateRoute exact path='/admin'>
                    <Dashboard/>
                  </PrivateRoute>
                  */}
                  
                  <PrivateRoute exact path='/admin' component={Dashboard}/>
                  <PrivateRoute exact path='/admin/manage' component={Manage}/>
                  <PrivateRoute exact path='/admin/setting' component={Setting}/>

                </Switch>
              </AdminLayout>
            </Route>

            <Route>
              <FrontLayout>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/store' component={Store}/>
                </Switch>
              </FrontLayout>
            </Route>

            <Route path='*' component={NoPage}/>

          </Switch>
        </BrowserRouter>

      </header>
    </div>
    </RecoilRoot>
  );
}

export default App;
