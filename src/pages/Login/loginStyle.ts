import { styled } from 'styled-components';

const style = {
  Login: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  BoxBorder: styled.div`
    border: 1px solid skyblue;
    border-radius: 7px;
    padding: 10%;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      /* flex-direction: column; */
    }
  `,
  MemverBtn: styled.div`
    display: flex;
    flex-direction: column;
    button {
      color: white;
      background-color: blue;
      border: 1px solid skyblue;
      border-radius: 3px;
    }
  `,
};

export default style;
