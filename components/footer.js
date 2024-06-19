import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-300 grid grid-cols-1 sm:grid-cols-3 h-fit py-4 pl-5">
      <div>
        <Image src="/logo.svg" height={60} width={60} alt="mible logo"></Image>
      </div>
      <div>
        <h3 className="font-bold">Product</h3>
        <ul>
          <li className="my-2">
            <Link href="#">Features</Link>
          </li>
          <li className="my-2">
            <Link href="#">Pricing</Link>
          </li>
          <li className="my-2">
            <Link href="/register">Register</Link>
          </li>

          <li className="my-2">
            <Link href="/">Resources</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Company</h3>
        <ul>
          <li className="my-2">
            <Link href="#">About</Link>
          </li>
          <li className="my-2">
            <Link href="/register">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
