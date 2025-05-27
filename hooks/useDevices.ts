import { useMediaQuery } from "@react-hook/media-query";
import React from "react";

export const useDevices = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile;
};
