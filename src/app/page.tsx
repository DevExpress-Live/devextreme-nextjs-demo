import React from "react";
import { getServerSession } from "next-auth";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

const Page = async () => {
  const session = await getServerSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h2 className="font-bold mb-4">Welcome to DX</h2>
        <h4 className="mb-8">Your next great app starts here.</h4>
        <div className="mb-4">
          <SignOutButton />
        </div>
        <Link href="/dashboard">
          <span className="text-xl px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900">
            Dashboard
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="font-bold mb-4">Welcome to DX</h2>
      <h4 className="mb-8">Your next great app starts here.</h4>
      <div className="flex space-x-4">
        <Link href="/signin">
          <span className="text-xl px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Sign In
          </span>
        </Link>
        <Link href="/dashboard">
          <span className="text-xl px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900">
            Dashboard
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
