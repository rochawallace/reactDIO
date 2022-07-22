import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  margin-bottom: 10px;

  input{
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    padding: 7px;
    margin-right: 5px;

    &:focus{
      outline: none;
    }
  }

  button{
    background-color: #03a9f4;
    padding: 8px 0;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.25);

    &:hover{
      transition: 0.8s;
      color: black;
      background-color: #aff;
    }
  }

  span{
    font-weight: bold;
    padding: 0 16px;
    color: white;

    &:hover{
      transition: 0.8s;
      color: black;
    }
  }
`;
