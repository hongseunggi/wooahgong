import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProgressBar from '@ramonak/react-progress-bar';
import { toast } from 'react-toastify';
import UserApi from 'common/api/UserApi';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { register, setId, setPwd, setEmail, setGender, setAtmos, setBirth, setNick, Register } from './registerReducer';
import { ReducerType } from '../../app/rootReducer';

const Img = styled.img`
  width: 65px;
  height: 65px;
  margin-top: 155px;
  margin-left: 147px;
  margin-bottom: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Progress = styled.div`
  margin-top: 55px;
  margin-left: 61px;
`;
const Title = styled.h3`
  text-align: left;
  margin-left: 58px;
  margin-top: 35px;
  margin-bottom: 40px;
  font-family: 'NotoSansKR';
  font-size: 22px;
`;
const Input = styled.input`
  font-family: 'NotoSansKR';
  font-size: 11px;
  width: 150px;
  height: 31px;
  margin-left: 58px;
  margin-bottom: 20px;
  padding-left: 3px;
  padding-bottom: 0px;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: #d7d7d7 1px solid;
`;
const ConfirmBtn = styled.button`
  width: 80px;
  height: 23px;
  margin-left: 10px;
  font-family: 'NotoSansKR';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  background: #ffffff;
  border: 0.7px solid #b0b0b0;
  border-radius: 50px;
  cursor: pointer;
`;
const DisableButton = styled.button`
  border-style: none;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  font-family: 'NotoSansKR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  cursor: default;
  color: rgba(0, 0, 0, 0.5);
`;
const ActiveButton = styled.button`
  background: #80b2fe;
  border-style: none;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  font-family: 'NotoSansKR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow: 0rem 0.5rem 2rem rgba(179, 161, 224, 0.4);
    transform: translateY(-7px);
  }
`;
const ErrorMsg = styled.span`
  position: absolute;
  color: red;
  font-family: 'NotoSansKR';
  font-size: 11px;
  top: 450px;
  left: 0px;
  margin-left: 61px;
`;

type MyProps = {
  progress: number;
};

function Checkmail({ progress }: MyProps) {
  const [email, setStateEmail] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isOk, setIsOk] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
      const detectMobileKeyboard = () =>{
        if(document.activeElement?.tagName === "INPUT"){
          console.log("??S?S?D?SSD?SD?SD?");
          if(listRef.current !== null) {
            console.log(listRef.current);
            listRef.current.scrollIntoView({block : 'end'});

          } 
        }
      }
      window.addEventListener("resize", detectMobileKeyboard);
      return () => window.removeEventListener("resize", detectMobileKeyboard);
  }, []);


  const navigate = useNavigate();

  const {getEmailCheckResult, getEmailCheckCodeResult} = UserApi;

  const regist = useSelector<ReducerType, Register>((state) => state.registerReducer);
  const dispatch = useDispatch();

  const handleEmailOk = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.currentTarget.value;
    console.log(emailCurrent);
    setStateEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setErrorMsg('???????????? ?????? ????????? ???????????????.');
      setIsEmail(false);
    } else {
      setErrorMsg('');
      setIsEmail(true);
      setIsError(false);
    }
  }, []);
  const handleCodeOk = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curCode = e.currentTarget.value;
    console.log(curCode);
    setCode(curCode);
  };

  const handleEmailCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // axios ??????
    // ???????????? ?????? api
    const body = {
      "email" : email
    }
    console.log(body);
    const result = await getEmailCheckResult(body);
    
    if(result.status === 200){
      toast.info(
        <div style={{ width: 'inherit', fontSize: '10px' }}>
          <div>???????????? ?????????????????????.</div>
          <span>???????????? ?????? ?????? ?????? ????????? ????????? ?????? ??????????????????.</span>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: 'alert',
        },
      );
      setIsError(true);
    }
    else{
      toast.error(
        <div style={{ width: 'inherit', fontSize: '10px' }}>
          <div>?????? ??????????????? ????????? ?????????.</div>
          <span>?????? ???????????? ??????????????????</span>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: 'alert',
        },
      );
      setIsError(false);
    }
    
    // ????????? ?????? error toast ??????
  };

  const handleCodeCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // axios ??????
    const data = {
      "email" : email,
      "code" : code
    }
    const result = await getEmailCheckCodeResult(data);
    
    if(result.status === 200){
      toast.success(<div style={{ width: 'inherit', fontSize: '14px' }}>????????? ?????????????????????.</div>, {
        position: toast.POSITION.TOP_CENTER,
        role: 'alert',
      });
      setIsOk(true);
    }
    else{
      toast.warn(<div style={{ width: 'inherit', fontSize: '14px' }}>??????????????? ???????????? ????????????.</div>, {
        position: toast.POSITION.TOP_CENTER,
        role: 'alert',
      });
      setIsOk(false);
    }
    // ????????? ????????? ?????? toast ?????? ?????????
  };
  const handleOnClickNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setEmail(email));
    navigate('/regist/confirmId');
  };

  return (
    <main>
      <article>
        <div>
          <div>
            <Img src={Logo} alt="Logo" />
            <Progress>
              <ProgressBar
                completed={progress}
                customLabel=" "
                width="238px"
                height="5px"
                bgColor="linear-gradient(90deg, #B3A1E0 0%, #5DACF5 100%)"
                baseBgColor="#D7D7D7"
              />
            </Progress>
          </div>
          <Title>???????????? ??????</Title>
          <Input type="text" placeholder="???????????? ??????????????????." onChange={handleEmailOk} />
          <ConfirmBtn onClick={handleEmailCheck} disabled={!isEmail}>
            ???????????? ??????
          </ConfirmBtn>
          <ErrorMsg>{errorMsg}</ErrorMsg>
          <Input type="password" onChange={handleCodeOk} placeholder="??????????????? ??????????????????." />
          <ConfirmBtn onClick={handleCodeCheck} disabled={!isError}>
            ???????????? ??????
          </ConfirmBtn>

          <div
            ref={listRef}
            style={{
              position: 'absolute',
              marginLeft: '80px',
              top: '523px',
            }}
          >
            {isOk ? (
              <ActiveButton onClick={handleOnClickNextStep}>??? ???</ActiveButton>
            ) : (
              <DisableButton>??? ???</DisableButton>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}

export default Checkmail;
