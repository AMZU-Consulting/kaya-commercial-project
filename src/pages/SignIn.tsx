import React from 'react';
import { AuthSidebar } from '@/components/SignIn/AuthSidebar';
import { SignInForm } from '@/components/SignIn/SignInForm';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Panel: Brand & Info (Desktop only) */}
      <AuthSidebar />

      {/* Right Panel: Sign In Form */}
      <SignInForm />
    </div>
  );
};

export default SignIn;