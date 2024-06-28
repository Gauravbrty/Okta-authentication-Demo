import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: ${props => props.variant === 'logout' ? "#e74c3c" : "#829fff"};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => props.variant === 'logout' ? "#c0392b" : "#357abd"};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <ButtonsContainer>
      {isAuthenticated ? (
        <StyledButton 
          variant="logout"
          onClick={() => logout({ logoutParams: { returnTo: window?.location?.origin } })}
        >
          Log Out
        </StyledButton>
      ) : (
        <StyledButton 
          variant="login"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </StyledButton>
      )}
    </ButtonsContainer>
  );
};

export default LoginButton;