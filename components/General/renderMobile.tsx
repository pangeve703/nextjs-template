"use client";
import { useDevices } from "@/hooks/useDevices";
import React from "react";

export const RenderMobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useDevices();
  return isMobile ? children : <></>;
};
