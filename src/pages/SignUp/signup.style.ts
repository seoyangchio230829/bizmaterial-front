import styled from 'styled-components';

const style = {
  SignUpStyle: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      color: skyblue;
    }
  `,
  Border: styled.div`
    border-bottom: 1px solid skyblue;
    width: 460px;
  `,
  InputBox: styled.div`
    width: 460px;
    div {
      display: flex;

      p {
        text-align: left;
        width: 180px;
      }
      input {
        border: 0;
        border-bottom: 1px solid skyblue;
        width: 100%;
      }
    }
  `,
  TypeContainer: styled.div`
    display: flex;
  `,

  CheckBox: styled.div`
    display: flex;
  `,
  SubmitBtn: styled.button`
    background-color: skyblue;
    color: white;
    border: 0;
  `,
};

export default style;
