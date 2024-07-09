import SignInForm from "@/components/SignInForm";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h3 className="mb-4">Sign In</h3>
      <div className="md:w-[40%] w-[90%]">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
