import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import { setToken } from '../../utils/utils';
import BaseForm from '../../components/Base/Base-Form';
import BaseButton from '../../components/Base/Base-Button';


const LoginPage = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const formConfig = [
    {
      name: 'username',
      label: '',
      style: {
        width: '240px',
        height: '40px',
        marginBottom: '16px',
      },
      placeholder: 'phone'
    },
    {
      name: 'password',
      label: '',
      style: {
        width: '240px',
        height: '40px',
        marginBottom: '16px',
      },
      placeholder: 'password'
    },
  ];


  const login = async () => {
    let data = await formRef.current.submitData();
    setToken(data);
    navigate('/', { replace: true });
  }
  return (
    <div className='login'>
      <div className='login__card'>
        <h1>React Exhibit</h1>
        <div className='login__form'>
          <BaseForm ref={formRef} formConfig={formConfig} />
          <BaseButton style={{ width: '140px' }} onClick={login} text="Login" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
