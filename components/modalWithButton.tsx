"use client";
import { Button } from "@heroui/button";
import { CModal } from "./modal";
import { useDisclosure } from "@heroui/react";

type ModalWithButtonProps = {
  buttonLabel: string;
  title: string;
  children: React.ReactNode;
};
export const ModalWithButton = ({ buttonLabel, title, children }: ModalWithButtonProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>{buttonLabel}</Button>
      <CModal title={title} isOpen={isOpen} onOpenChange={onOpenChange}>
        {children}
      </CModal>
    </>
  );
};
