import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { signOut } from 'next-auth/react';

const DashboardPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/signin');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  );
}

export default DashboardPage;
