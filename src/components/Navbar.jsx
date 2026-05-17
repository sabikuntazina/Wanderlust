   import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
<nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg ">
  <header className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto ">
    <ul className="flex items-center gap-4 font-semibold ">
      <li ><Link href="/" className="navbar">Home</Link></li>
      <li><Link href="/destination">Destinations</Link></li>
      <li><Link href="/add-destination">Add Destination</Link></li>
      <li><Link href="#">Admin</Link></li>
    </ul>
    <div className="flex items-center gap-3">
      <Image src="/assets/Wanderlast.png" alt="logo" height={150} width={150} />
    </div>
     <ul className="flex items-center gap-4 font-semibold">
      <li><Link href="#">Profile</Link></li>
      <li><Link href="/login">Login</Link></li>
      <li><Link href="/signup">Sign Up</Link></li>
    </ul>
  </header>
</nav>
  );
};

export default Navbar;