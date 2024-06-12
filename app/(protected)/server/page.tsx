import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ProtectedServerPage = async () => {
  const user = await currentUser();

  return (
    <UserInfo label="🖥️ Server component!" user={user} />
  )
}

export default ProtectedServerPage;