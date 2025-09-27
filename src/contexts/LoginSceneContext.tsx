import React, { createContext, useContext, ReactNode } from 'react';

interface LoginSceneContextType {
  loginScene: string;
}

const LoginSceneContext = createContext<LoginSceneContextType | undefined>(undefined);

export const useLoginScene = () => {
  const context = useContext(LoginSceneContext);
  if (context === undefined) {
    throw new Error('useLoginScene must be used within a LoginSceneProvider');
  }
  return context;
};

interface LoginSceneProviderProps {
  children: ReactNode;
  loginScene: string;
}

export const LoginSceneProvider: React.FC<LoginSceneProviderProps> = ({ children, loginScene }) => {
  return (
    <LoginSceneContext.Provider value={{ loginScene }}>
      {children}
    </LoginSceneContext.Provider>
  );
};
