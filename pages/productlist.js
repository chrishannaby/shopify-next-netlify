import Head from 'next/head';
import ProductListing from '@components/ProductListing';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { getProductList } from '@api/getProductList';

export default function ProductListPage({ products }) {
  return (
    <div className="container">
      <Head>
        <title>LifeFitness | Product List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="product-list-page">
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.node.id}>
              <ProductListing product={product.node} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductList();
  return {
    props: {
      products: products,
    },
  };
}
