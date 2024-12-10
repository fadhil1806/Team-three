import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative bg-background min-h-screen flex flex-col items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background opacity-60"></div>

      {/* Header content */}
      <div className="relative text-center text-foreground px-6 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Online Assignment Collection
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl mb-8 text-muted-foreground">
          Welcome to the Ti Bazma High School online assignment collection website.
        </p>

        {/* Action buttons */}
        <div className="flex justify-center gap-4">
          <Button className="h-[45px]">
            Get Started
          </Button>
          <Button variant='outline' className="h-[45px]">
            <Link href='/form/create'>
            Submit Task
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
