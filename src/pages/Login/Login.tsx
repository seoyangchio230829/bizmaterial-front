import style from 'pages/Login/loginStyle';
import {
  LOGIN_DATA,
  COMPANY_LOGIN_DATA,
  INDIVIDUAL_LOGIN_DATA,
  MEMBER_DATA,
} from 'pages/Login/LOGIN_DATA';

const Login = () => {
  let mamber = 'company';
  // mamber = 'individual';
  const memberStatus = mamber === 'company';
  const condition = memberStatus ? COMPANY_LOGIN_DATA : INDIVIDUAL_LOGIN_DATA;

  return (
    <style.Login>
      <img src="" alt="logo" />
      <div>
        <div>
          {LOGIN_DATA.map(imgs => {
            return (
              <div key={imgs.id}>
                <img src="" alt={imgs.alt} />
                <input />
              </div>
            );
          })}
        </div>
        <div>
          {condition.map(texts => {
            return <button key={texts.id}>{texts.text}</button>;
          })}
        </div>
        <img
          src={
            memberStatus ? MEMBER_DATA.companyImg : MEMBER_DATA.individualImg
          }
          alt="memberLogo"
        />
      </div>
    </style.Login>
  );
};

export default Login;
