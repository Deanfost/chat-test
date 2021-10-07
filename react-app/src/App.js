import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import DefaultPage from './components/DefaultPage';
import { SocketProvider } from './context/socketContext';
import { UsersProvider } from './context/usersContext';
import { MainProvider } from './context/mainContext';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <MainProvider>
        <UsersProvider>
          <SocketProvider>
            <Flex className="App" align='center' justifyContent='center'>
              <Router>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/chat' component={Chat} />
                  <Route component={DefaultPage} />
                </Switch>
              </Router>
            </Flex>
          </SocketProvider>
        </UsersProvider>
      </MainProvider>
    </ChakraProvider>
  );
}

export default App;
