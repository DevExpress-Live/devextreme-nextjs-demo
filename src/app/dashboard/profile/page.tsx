import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Hello {session.user.name}</p>
    </div>
  );
};

export default ProfilePage;
