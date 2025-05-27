"use client";
import { useDevices } from "@/hooks/useDevices";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
type CModalProps = {
  children: React.ReactNode;
  title: string;
  footer?: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CModal = ({ children, title, footer, isOpen, onOpenChange }: CModalProps) => {
  const modalSize = useDevices() ? "full" : "md";

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={modalSize}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>{footer}</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
