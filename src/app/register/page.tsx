import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h3 className="mb-4">Register</h3>
      <div className="md:w-[40%] w-[90%]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
