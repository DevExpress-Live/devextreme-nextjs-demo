import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SalesPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin");
  }
  return (
    <div>
      <h1>Sales Page</h1>
    </div>
  );
};

export default SalesPage;
