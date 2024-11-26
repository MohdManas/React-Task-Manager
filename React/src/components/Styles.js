import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
}
body{
  background: linear-gradient(100deg, rgb(182, 40, 111) 50%, #ac2066 0);
  width: 100%;
  min-height: 100vh;
}
#root{
  display:flex;
  flex-direction:column;
  min-height:100vh;
}
`;

export const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
  img {
    max-width: 5rem;
    border-radius:2rem;
    
  }
  a,
  a:hover,
  a:focus {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  height: auto;
`;

export const FormHeading = styled.div`
  h1 {
    color: #ccc;
    font-weight: 300;
    text-align: center;
    margin: 30px 20px 50px 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    @media screen and (max-width: 576px) {
      margin: 0 0 30px 0;
      font-size: 1.8rem;
    }
  }
`;

export const AppWrapper = styled.div`
  background-color: #292f38;
  width: 25%;
  min-width: 450px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 576px) {
    min-width: 90%;
    height: auto;
    padding: 30px 15px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

export const ListWrap = styled.ul`
  width: 90%;
  margin: auto;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  span {
    color: #999;
  }
`;

export const TaskBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding:0.4rem;
  margin:0.1rem;
  position:relative;
  bottom:6px;
  border: none;
  outline: none;
  i {
    font-size: 20px;
    color: #bbb;
    margin-left: 25px;
  }
`;

export const NoTaskWrap = styled.h2`
  color: #777;
  text-align: center;
  font-size: 1.4rem;
  margin: 20px 0 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TaskInput = styled.input`
  width: 350px;
  min-width: 250px;
  padding: 15px 10px 15px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #ccc;
  background-color: #1d222b;
  border: 1px solid #444;
  outline: none;
  border-radius: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 576px) {
    width: 78%;
    min-width: auto;
    margin-right: 0;
  }
`;

export const AddButton = styled.button`
  min-width: 100px;
  background-color: #790e43;
  color: #ccc;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #790e43;
  color: #ccc;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 20px 10px;
  }
`;

export const FooterContainer = styled.footer`
  text-align: center;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  padding: 25px 0 12px;
  font-size: 14px;
  margin-top: auto;
  a,
  a:focus {
    color: #fff;
    text-decoration: none;
  }
`;