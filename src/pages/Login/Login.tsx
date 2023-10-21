import style from 'pages/Login/loginStyle';
import { useState } from 'react';
import useInputValue from 'hooks/useInputValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Login = () => {
  const [isCompany, setIsCompany] = useState<string>('company');

  const initInputValue = {
    id: '',
    pw: '',
  };

  const { inputValue, handleInput } = useInputValue(initInputValue);

  const navigate = useNavigate();

  const memberChangeBtn = (memberStatus: string): void => {
    setIsCompany(memberStatus);
  };

  const postUserData = () => {
    fetch('http://127.0.0.1:5000/company/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.pw,
        type: isCompany,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'Login successful') {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        } else if (data.message === 'USER_IS_NOT_VALID') {
          //에러핸들링하기
        }
      });
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
          <input
            name="id"
            placeholder="아이디"
            type="text"
            required
            onChange={e => handleInput(e)}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLock}
            size="3x"
            style={{ paddingRight: '5px' }}
          />
          <input
            name="pw"
            placeholder="비밀번호"
            type="password"
            required
            onChange={e => handleInput(e)}
          />
        </div>
      </style.BoxBorder>

      <style.LoginBtn
        onClick={postUserData}
        isValid={inputValue.id.length > 0 && inputValue.pw.length > 0}
      >
        로그인
      </style.LoginBtn>
      <style.SignupBtn>
        <button onClick={() => navigate('/signUp/company')}>
          기업고객 회원가입
        </button>
        <p>|</p>
        <button onClick={() => navigate('/signUp/individual')}>
          개인고객 회원가입
        </button>
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
