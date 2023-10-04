import style from 'pages/Login/loginStyle';
import { LOGIN_DATA } from 'pages/Login/LOGIN_DATA';
import { useState } from 'react';
import useInputValue from 'hooks/useInputValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// export type memberProps = {
//   memberPage: boolean;
// };

const Login = () => {
  const [isCompany, setIsCompany] = useState('company');
  const { inputValue, handleInput } = useInputValue({
    id: '',
    pw: '',
  });

  const memberChangeBtn = (memberStatus: string): void => {
    setIsCompany(memberStatus);
  };

  return (
    <style.Login>
      <img src="" alt="BizMaterial" />
      <style.MemverBtns memberPage={isCompany === 'company'}>
        <button onClick={() => memberChangeBtn('company')}>기업고객</button>
        <button onClick={() => memberChangeBtn('individual')}>개인고객</button>
      </style.MemverBtns>
      <style.BoxBorder>
        <div>
          <FontAwesomeIcon icon={faCircleUser} />
          <input />
        </div>
        <div>
          <FontAwesomeIcon icon={faLock} />
          <input />
        </div>
      </style.BoxBorder>
      <style.LoginBtn>로그인</style.LoginBtn>
      <style.SignupBtn>
        <button>개인고객 회원가입</button>
        <p>|</p>
        <button>기업고객 회원가입</button>
      </style.SignupBtn>
      <style.MemberLogo
        src={
          isCompany === 'company'
            ? './images/IMG_7632.jpg'
            : './images/IMG_7631.jpg'
        }
        alt="memberLogo"
      />
    </style.Login>
  );
};

export default Login;
