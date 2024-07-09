import React from "react";
import { getServerSession } from "next-auth";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

const Page = async () => {
  const session = await getServerSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to DX</h1>
        <h2 className="text-2xl mb-8">Your gateway to amazing features</h2>
        <SignOutButton />
        <Link href="/dashboard">
          <span className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-green-700">Dashboard</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to DX</h1>
      <h2 className="text-2xl mb-8">Your gateway to amazing features</h2>
      <div className="flex space-x-4">
        <Link href="/signin">
          <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Sign In</span>
        </Link>
        <Link href="/dashboard">
          <span className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-green-700">Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
