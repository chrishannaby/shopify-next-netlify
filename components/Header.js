import Link from 'next/link';
import Image from 'next/image';


import { useAppContext } from "../state";


export default function Header() {
  const { items, setItems } = useAppContext();

  return (
    <header className="app-header">

      <h1>
        <Link legacyBehavior href="/">
          <a>
          <Image src="/logo-svg-data.svg"
            alt="logo"
            width="500"
            height="100"
          />

          </a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              All Products
            </Link>
          </li>
          <li className="main-nav-item">
            <Link legacyBehavior href="/cart">
              <a className="cart cartLink" id="cartSize">
                Shopping Cart
                { items > 0 ? <span className='cart-size'>{items}</span>: ""}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
