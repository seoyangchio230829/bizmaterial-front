import styled from 'styled-components';

const style = {
  SignUpStyle: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 460px;
    p {
      width: 125px;
    }
    div {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      p {
        width: 100%;
      }
    }
  `,

  CheckBox: styled.div`
    display: flex;
  `,

  SubmitBtn: styled.button`
    background-color: skyblue;
    color: white;
    border: 0;
    padding: 20px;
    width: 460px;
    font-size: 15px;
    border-radius: 5px;
  `,
};

export default style;
