import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const session = await getServerSession();

  if (session) {
    return (
      <div>
        <h1>Profile Page</h1>
        <p>Hello {session.user.name}</p>
      </div>
    );
  }
};

export default ProfilePage;
