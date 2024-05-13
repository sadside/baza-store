"use client";

import { $currentFormStep, FORM_STEPS } from "@widgets/create-order-form/model/create-order-model";
import { FirstFirstStep } from "@widgets/create-order-form/ui/auth-step/first-step";
import { FirstSecondStep } from "@widgets/create-order-form/ui/auth-step/second-step";
import { FirstThirdStep } from "@widgets/create-order-form/ui/auth-step/third-step";
import { useUnit } from "effector-react";

const getStep = (currentStep: FORM_STEPS) => {
  if (currentStep === FORM_STEPS.AUTH_STEP) return <FirstFirstStep />;
  if (currentStep === FORM_STEPS.CONFIRM_CODE_STEP) return <FirstSecondStep />;
  if (currentStep === FORM_STEPS.USER_DATA_STEP) return <FirstThirdStep />;
  return <></>;
};

export const FirstStep = () => {
  const currentStep = useUnit($currentFormStep);

  return getStep(currentStep);
};
