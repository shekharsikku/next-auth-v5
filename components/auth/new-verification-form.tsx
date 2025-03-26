"use client";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onSubmit = useCallback(async () => {
    if (!token) {
      setError("Missing verification token!");
      return
    };
    await newVerification(token)
      .then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      }).catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirming your verification!"
      backButtonLabel="Back to login?"
      backButtonHref="/auth/login"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {!success && !error && (
          <BeatLoader />
        )}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  )
}

export { NewVerificationForm };