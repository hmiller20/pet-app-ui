 // minimal implementation; creates a mock user for testing purposes
 
 'use client';

import { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: any | null;
}

const AuthContext = createContext<AuthContextType>({ user: null });

export function AuthProvider({ children }: { children: ReactNode }) {
  // Minimal implementation - just return a mock user
  const user = { id: '1' };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);