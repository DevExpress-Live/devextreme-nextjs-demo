"use client";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import notify from "devextreme/ui/notify";

const SignInForm = () => {
  const formData = useRef({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: formData.current.email,
      password: formData.current.password,
    });

    if (result?.error) {
      notify({
        message: "Invalid email or password.",
        type: "error",
        displayTime: 3000,
        position: {
          my: "center top",
          at: "center top",
          offset: "0 100",
        },
      });
    } else {
      window.location.replace("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form
        formData={formData.current}
        disabled={loading}
        showColonAfterLabel={false}
        showRequiredMark={false}
      >
        <Item
          dataField="email"
          editorType="dxTextBox"
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
          <Label visible={false} />
        </Item>
        <Item
          dataField="password"
          editorType="dxTextBox"
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions width="100%" type="default" useSubmitBehavior={true}>
            {loading ? (
              <LoadIndicator width="24px" height="24px" visible={true} />
            ) : (
              "Login"
            )}
          </ButtonOptions>
        </ButtonItem>
        <ButtonItem>
          <ButtonOptions
            width="100%"
            type="normal"
            onClick={() => router.push("/register")}
          >
            Register
          </ButtonOptions>
        </ButtonItem>
      </Form>
    </form>
  );
};

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "Email",
  mode: "email",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Password",
  mode: "password",
};

export default SignInForm;
