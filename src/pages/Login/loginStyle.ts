import { styled } from 'styled-components';

// type memberProps = {
//   memberPage: boolean;
// };
const style = {
  Login: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  MemverBtns: styled.div<{ memberPage: boolean }>`
    button {
      background-color: ${props => (props.memberPage ? 'skyblue' : 'blue')};
    }
  `,
  BoxBorder: styled.div`
    border: 1px solid skyblue;
    border-radius: 20px;
    padding: 5%;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      /* flex-direction: column; */
    }
  `,
  LoginBtn: styled.div`
    color: white;
    background-color: skyblue;
    border-radius: 5px;
    width: 10%;
    height: 5%;
    text-align: center;
  `,
  SignupBtn: styled.div`
    display: flex;
    gap: 10px;

    button {
      background-color: white;
      border: 0px;
    }
  `,

  MemberLogo: styled.img`
    width: 100px;
  `,
};

export default style;
