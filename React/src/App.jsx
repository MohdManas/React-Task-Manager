import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FormHeader from './components/FormHeader';

import TaskListContextProvider from './context/TaskListContext';

import {GlobalStyle,Container,AppWrapper,Main} from './components/Styles'

const App = () => {
  return (
    <React.Fragment>
      <TaskListContextProvider>
        <Header />
        <Container>
          <AppWrapper>
            <Main>
              <FormHeader />
              <TaskForm />
              <TaskList />
            </Main>
          </AppWrapper>
        </Container>
        <Footer />
        <GlobalStyle />
      </TaskListContextProvider>
    </React.Fragment>
  );
};

export default App;