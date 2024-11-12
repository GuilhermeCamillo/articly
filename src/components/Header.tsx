import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "../../auth";
import AvatarMenu from "./AvatarMenu";

const Header = async () => {
  const session = await auth();
  return (
    <header className="bg-white items-center p-2 h-14">
      <div className="container flex justify-between mx-auto">
        <Link href="/">
          <Image
            src="/articly-high-resolution-logo-transparent.png"
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        {session?.user ? (
          <AvatarMenu
            userName={session.user?.name}
            userEmail={session?.user.email}
          />
        ) : (
          <Link
            href="/signin"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-[1.5px] border-neutral-300 group-hover:bg-black"></span>
            <span className="relative font-bold text-black group-hover:text-white">
              Entrar
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
