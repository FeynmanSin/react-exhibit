// import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import PCPage from '../index';
import ListTemplatePage from '../modules/template_module/ListTemplatePage';
import LoginPage from '../../LoginPage';
import UserDetailsPage from '../modules/template_module/UserDetailsPage';
import AuthRouter from '../../../components/RenderProps/AuthRouter'
import ChatPage from '../modules/multi_tool/ChatPage';
import DragPage from '../modules/multi_tool/DragPage'
import TestPage from '../modules/multi_tool/TestPage';

const PCRouters = () => {
  return useRoutes([
    {
      path: '/',
      element: <AuthRouter element={() => <PCPage />} />,
      children: [
        {
          path: 'multi_tool',
          children: [
            {
              path: 'DragPage',
              element: <AuthRouter element={() => <DragPage />} />
            },
            {
              path: 'ChatPage',
              element: <AuthRouter element={() => <ChatPage />} />
            },
            {
              path: 'TestPage',
              element: <AuthRouter element={() => <TestPage />} />
            }
          ]
        },
        {
          path: 'template_module',
          children: [
            {
              path: 'ListTemplatePage',
              element: <AuthRouter element={() => <ListTemplatePage />} />
            },
            {
              path: 'UserDetailsPage',
              element: <AuthRouter element={() => <UserDetailsPage />} />
            },
          ]
        },
      ]
    },
    {
      path: 'login',
      element: <LoginPage />
    },

  ]);
}
export default PCRouters;