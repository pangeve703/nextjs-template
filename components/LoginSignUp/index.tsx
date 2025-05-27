"use client";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import React from "react";
import { LoginForm } from "./Login";
import { LoginType } from "@/enums/loginType";
import { SignUpForm } from "./SignUp";
import { SignUpType } from "@/enums/signUpType";

export const LoginSignUp = ({ type }: { type: String }) => {
  const [selected, setSelected] = React.useState(LoginType.phone);
  const [loginOrSignUp, setLoginOrSignUp] = React.useState(type);

  return (
    <Card className="w-full">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          aria-label="Tabs form"
          selectedKey={selected}
          size="md"
          onSelectionChange={(key) => setSelected(key as LoginType)}
        >
          <Tab key="phone" title="Phone Number">
            {loginOrSignUp === "login" ? (
              <LoginForm loginType={LoginType.phone} />
            ) : (
              <SignUpForm signUpType={SignUpType.phone} />
            )}
          </Tab>
          <Tab key="email" title="Email">
            {loginOrSignUp === "login" ? (
              <LoginForm loginType={LoginType.email} />
            ) : (
              <SignUpForm signUpType={SignUpType.email} />
            )}
          </Tab>
        </Tabs>

        <div className="flex justify-center mt-4">
          <button
            className="text-sm text-gray-700"
            onClick={() => setLoginOrSignUp(loginOrSignUp === "login" ? "signup" : "login")}
          >
            {loginOrSignUp === "login" ? (
              <>
                Don't have an account?{" "}
                <span className="text-blue-600 font-semibold  hover:underline">Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-blue-600 font-semibold hover:underline">Login</span>
              </>
            )}
          </button>
        </div>
      </CardBody>
    </Card>
  );
};
