import React from "react";
import { Laptop, ShoppingBag, Shirt, Package, Store, Sun, Moon } from "lucide-react";
import { AnimatedDock } from "./animated-dock";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // Theme toggle component
  const ThemeToggle = () => {
    const [dark, setDark] = React.useState(() =>
      document.documentElement.classList.contains("dark")
    );

    const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        setDark(false);
      } else {
        html.classList.add("dark");
        setDark(true);
      }
    };

    const Icon = dark ? Sun : Moon;
    return <Icon className="h-4 w-4 cursor-pointer" onClick={handleToggle} />;
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-transparent backdrop-blur-md z-50 border-b border-border">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src="/assets/copym/png/Copym-05-1.png"
            alt="COPYm"
            className="h-10 w-10 object-contain"
          />
        </Link>
      </div>
        <span className="text-xl font-bold mx-auto text-foreground">COPYM</span>

      <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground ml-auto">
        <span className="whitespace-nowrap">
          Tokenize Physical Assets in Minutes — Secure, Compliant, Global.
        </span>
        <AnimatedDock
          items={[
            { link: "#", Icon: <Laptop className="h-4 w-4" /> },
            { link: "#", Icon: <ShoppingBag className="h-4 w-4" /> },
            { link: "#", Icon: <Shirt className="h-4 w-4" /> },
            { link: "#", Icon: <Package className="h-4 w-4" /> },
            { link: "/marketplace", Icon: <Store className="h-4 w-4" /> },
            { link: "#", Icon: <ThemeToggle /> },
          ]}
        />
      </div>
    </header>
  );
};

export default Navbar; 