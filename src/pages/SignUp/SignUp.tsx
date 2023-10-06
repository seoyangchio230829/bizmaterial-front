import style from './signup.style';
//
import { COMPANY_DATA, INDIVIDUAL_DATA, CHECKBOX_DATA } from './SIGNUP_DATA';

const SignUp = () => {
  //params로 name 값 받아오는 식으로 구현 예정
  let param = 'company';
  const condition = param === 'company';
  const dataCondition = condition ? COMPANY_DATA : INDIVIDUAL_DATA;
  const textCondition = condition ? '기업고객' : '개인고객';

  return (
    <style.SignUpStyle>
      <style.Title>
        <img src="/images/bizmaterial.logo.JPEG" alt="logo" />
        <style.Border />
        <p>{textCondition} 회원가입</p>
      </style.Title>

      <div>
        <style.InputBox>
          {dataCondition.map(tests => {
            return (
              <div key={tests.id}>
                <p>{tests.text}</p>
                <input type="text" />
              </div>
            );
          })}
        </style.InputBox>
        {condition && (
          <style.TypeContainer>
            <p>판매물품 타입</p>
            <div>
              {CHECKBOX_DATA.map(checkboxTexts => {
                return (
                  <style.CheckBox key={checkboxTexts.id}>
                    <input type="checkbox" />
                    <p>{checkboxTexts.text}</p>
                  </style.CheckBox>
                );
              })}
            </div>
          </style.TypeContainer>
        )}
      </div>
      <style.SubmitBtn>{textCondition} 회원가입</style.SubmitBtn>
    </style.SignUpStyle>
  );
};

export default SignUp;
