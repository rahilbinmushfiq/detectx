import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ display }) {
  const pathname = usePathname();

  return (
    <nav className={`p-5 landscape:p-0 ${display}`}>
      <ul className="font-semibold space-y-2.5 landscape:flex landscape:font-medium landscape:space-y-0 landscape:space-x-12">
        <li>
          <Link className={pathname === "/" ? "active" : undefined} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/detect" ? "active" : undefined}
            href="/detect"
          >
            Detect
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/license" ? "active" : undefined}
            href="/license"
          >
            License
          </Link>
        </li>
      </ul>
    </nav>
  );
}
