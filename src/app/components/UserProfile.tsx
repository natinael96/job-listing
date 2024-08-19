"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const UserProfile = ({ session }: { session: any }) => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/auth/signin", // Redirect to the sign-in page after sign-out
    });
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-[#1E3A8A] to-[#6E62E5] sticky top-0 z-10 shadow-md">
      <div className="flex items-center gap-2">
        {session && (
          <div className="text-white font-semibold text-lg">
            {session.user.name}
          </div>
        )}
      </div>

      <div className="flex gap-4">
        {session ? (
          <>
            <Link
              href="/bookmark"
              className="py-2 px-5 bg-white text-[#1E3A8A] rounded-full shadow-sm hover:bg-[#1E3A8A] hover:text-white transition duration-200"
            >
              Bookmark
            </Link>
            <button
              onClick={handleSignOut}
              className="py-2 px-5 bg-[#1E3A8A] text-white rounded-full shadow-sm hover:bg-[#6E62E5] transition duration-200"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="py-2 px-5 bg-white text-[#1E3A8A] rounded-full shadow-sm hover:bg-[#1E3A8A] hover:text-white transition duration-200"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="py-2 px-5 bg-[#1E3A8A] text-white rounded-full shadow-sm hover:bg-[#6E62E5] transition duration-200"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
