import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/signin');
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default DashboardPage;
