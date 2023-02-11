import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    transition: all 0.25s linear;
  }
  small {
    display: block;
  }
  button {
    display: block;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};    
    border: 2px solid ${({ theme }) => theme.text};
  }
  button:hover{
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};    
}
  .sidebar .nav-link{
    color: ${({ theme }) => theme.text};  
  }
  input {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};  
  }
`;
