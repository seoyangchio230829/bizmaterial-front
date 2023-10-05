import { styled } from 'styled-components';

// type memberProps = {
//   memberPage: boolean;
// };
const style = {
  Login: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
  `,

  CompanyBtn: styled.button<{ memberPage: boolean }>`
    background-color: ${props => (props.memberPage ? 'skyblue' : 'white')};
    border: 0px;
    border-radius: 5px;
    font-size: 15px;
    padding: 2px 20px 2px 20px;
  `,
  IndividualBtn: styled.button<{ memberPage: boolean }>`
    background-color: ${props => (props.memberPage ? 'white' : 'skyblue')};
    border: 0px;
    border-radius: 5px;
    font-size: 15px;
    padding: 2px 20px 2px 20px;
  `,
  BoxBorder: styled.div`
    border: 1px solid skyblue;
    border-radius: 5px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* width: 300px; */

    div {
      display: flex;
      gap: 10px;
      justify-content: center;
      svg {
        path {
          color: skyblue;
        }
      }
      input {
        height: 50px;
        width: 300px;
        border: 1px solid lightgray;
        border-radius: 5px;
      }
    }
  `,
  LoginBtn: styled.div`
    color: white;
    background-color: skyblue;
    border-radius: 5px;
    width: 460px;
    height: 5%;
    text-align: center;
    line-height: 35px;
    padding: 10px 20px;
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
