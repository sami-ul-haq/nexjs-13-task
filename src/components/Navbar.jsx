import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 5,
      title: "Blog",
      url: "/post",
    },
  ];

  return (
    <div className="flex justify-between items-center py-4">
      <div className="logo">
        <Link href={"/"} className="text-white">NEXTJS</Link>
      </div>
      <nav>
        <ul className="list-none flex gap-5">
          {links.map((link) => (
            <li className="text-white">
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
