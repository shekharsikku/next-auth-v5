"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

interface LogoutButtonInterface {
  children?: React.ReactNode
}

const LogoutButton = ({ children }: LogoutButtonInterface) => {
  const router = useRouter();

  const onClick = () => {
    logout().then(() => router.push("/auth/login"));
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}

export { LogoutButton };