"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";

const RegisterForm = () => {
  const formData = useRef({ email: "", password: "", name: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.current.email,
        password: formData.current.password,
        name: formData.current.name,
      }),
    });

    if (res.ok) {
      router.push("/signin");
    } else {
      const error = await res.json();
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form
        formData={formData.current}
        showColonAfterLabel={false}
        showRequiredMark={false}
      >
        <Item
          dataField="name"
          editorType="dxTextBox"
          editorOptions={nameEditorOptions}
        >
          <RequiredRule message="Name is required" />
          <Label visible={false} />
        </Item>
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
            Register
          </ButtonOptions>
        </ButtonItem>
      </Form>
    </form>
  );
};

const nameEditorOptions = {
  stylingMode: "filled",
  placeholder: "Name",
  mode: "text",
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

export default RegisterForm;
