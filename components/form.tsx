"use client";
import React, { useEffect } from "react";
import { Form, Button } from "@heroui/react";

interface CFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: Record<string, string>;
  setSubmitted: (value: any) => void;
  children: React.ReactNode;
}

export const CForm: React.FC<CFormProps> = ({ onSubmit, errors, setSubmitted, children }) => {
  return (
    <Form
      className="w-full justify-center space-y-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      {children}
      <div className="flex gap-4">
        <Button className="w-full" color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="bordered">
          Reset
        </Button>
      </div>
    </Form>
  );
};
