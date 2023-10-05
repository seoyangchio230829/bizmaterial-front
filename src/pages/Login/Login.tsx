import style from 'pages/Login/loginStyle';
import { useState } from 'react';
import useInputValue from 'hooks/useInputValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

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
      {/* <img src="" alt="BizMaterial" /> */}
      <h1>BizMaterial</h1>

      <div>
        <style.CompanyBtn
          onClick={() => memberChangeBtn('company')}
          memberPage={isCompany === 'company'}
        >
          기업고객
        </style.CompanyBtn>
        <style.IndividualBtn
          onClick={() => memberChangeBtn('individual')}
          memberPage={isCompany === 'company'}
        >
          개인고객
        </style.IndividualBtn>
      </div>
      <style.BoxBorder>
        <div>
          <FontAwesomeIcon icon={faCircleUser} size="3x" />
          <input />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLock}
            size="3x"
            style={{ paddingRight: '5px' }}
          />
          <input />
        </div>
      </style.BoxBorder>

      <style.LoginBtn>로그인</style.LoginBtn>
      <style.SignupBtn>
        <button>기업고객 회원가입</button>
        <p>|</p>
        <button>개인고객 회원가입</button>
      </style.SignupBtn>
      <style.MemberLogo
        src={
          isCompany === 'company'
            ? './images/IMG_7632.jpg'
            : './images/IMG_7631.jpg'
        }
        alt="memberLogo"
      />
      <p>
        {isCompany === 'company'
          ? '기업고객 화면입니다.'
          : '개인고객 화면입니다.'}
      </p>
    </style.Login>
  );
};

export default Login;
