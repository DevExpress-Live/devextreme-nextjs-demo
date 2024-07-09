import SignInForm from '@/components/SignInForm';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
  }
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
