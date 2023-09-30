import style from 'pages/Login/loginStyle';
import { LOGIN_DATA, MEMBER_DATA } from 'pages/Login/LOGIN_DATA';

const Login = () => {
  let mamber = 'company';
  // mamber = 'individual';
  const memberStatus = mamber === 'company';

  //버튼 누르면 스테이트값 저장하고 그 값 비교해서 ui 다른거 보여주게 만들기

  return (
    <style.Login>
      <img src="" alt="logo" />
      <div>
        <button>기업고객</button>
        <button>개인고객</button>
      </div>
      <style.BoxBorder>
        {LOGIN_DATA.map(imgs => {
          return (
            <div key={imgs.id}>
              <img src="" alt={imgs.alt} />
              <input />
            </div>
          );
        })}
      </style.BoxBorder>
      <style.MemverBtn>
        <button>로그인</button>
        <button>회원가입</button>
      </style.MemverBtn>
      <img
        src={memberStatus ? MEMBER_DATA.companyImg : MEMBER_DATA.individualImg}
        alt="memberLogo"
      />
    </style.Login>
  );
};

export default Login;
