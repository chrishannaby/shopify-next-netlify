import Link from 'next/link';

export default function Header() {
  return (
    <header className="app-header">
      <h1>
        <Link legacyBehavior href="/">
          <a>Mountain Shop</a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              All Products
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link legacyBehavior href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link legacyBehavior href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link legacyBehavior href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link legacyBehavior href="/cart">
              <a className="cart cartLink">Shopping Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
