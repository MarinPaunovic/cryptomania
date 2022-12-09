import { CustomForm } from 'modules/components/customForm/customForm';
import { RootState } from 'modules/redux/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';

export const Login = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return <CustomForm theme={theme} isLogin={true} />;
};
