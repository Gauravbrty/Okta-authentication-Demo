import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const AppMainContainer = styled.div`
  text-align: center;
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: white;
`;

const MainContent = styled.main`
  box-sizing: border-box;
  margin: 20px auto;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function App() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated, "isAuthenticated");

  return (
    <AppMainContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <Title>OktaAuthentication</Title>
        <Login isAuthenticated={isAuthenticated}/>
      </Header>
      <MainContent>
        {
          !isAuthenticated && <h1>Welcome to Our Demo Sign In APP</h1>
        }
        {isAuthenticated && (
          <>
            <Profile/>
          </>
        )}
      </MainContent>
    </AppMainContainer>
  );
}

export default App;