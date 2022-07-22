import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px){
    flex-direction: column;

    div{
      width: 100%;
    }
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  div{   
    text-align: center;
    margin-bottom: 10px;
  }

  h4{
    margin-bottom: 10px;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h3{
    margin-right: 8px;
  }

  a{
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #63a9e6;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  min-height: 150px;
  margin-top: 10px;
  margin-left: 8px;
  
  div{
    width: 100%;
    margin-right: 10px;
  }

  h1{
    font-size: 28px;
    font-weight: bold;
  }
  
  h3{
    font-size: 18px;
    font-weight: bold;
  }

  h4{
    font-size: 16px;
    font-weight: bold;
  }

`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  width: 200px;
  margin: 8px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.31);
`;

