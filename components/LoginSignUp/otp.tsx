"use client";
import { InputOtp } from "@heroui/react";
import React from "react";
import { CModal } from "../modal";

export const OTP = ({ length }: { length: number }) => {
  const [otpValue, setOtpValue] = React.useState("");
  return (
    <CModal title={"OTP"} isOpen={true} onOpenChange={() => {}}>
      <InputOtp
        length={length}
        value={otpValue}
        onValueChange={setOtpValue}
        className="items-center w-full"
        size="lg"
        color="secondary"
      />
    </CModal>
  );
};
