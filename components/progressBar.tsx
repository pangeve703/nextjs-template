"use client";

import { ProgressBar as HeroProgressBar } from "@heroui/react";

interface ProgressBarProps {
  value: number;
  maxValue: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue, label }) => {
  return (
    <div>
      <label>{label}</label>
      <HeroProgressBar value={value} maxValue={maxValue} />
    </div>
  );
};

export default ProgressBar;
