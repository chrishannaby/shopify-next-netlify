import { useAppContext } from "../state";


export default function CartCheckOut() {
const { cartId, setCartId } = useAppContext();

  let getCheckOutLink = (itemId) => {
    fetch("/.netlify/functions/get-cart-link", {
      method: "POST",
      body: JSON.stringify({
        cartId: cartId
      }),
    })
      .then((response) => response.json())
      .then((response) => {
       
        console.log("Shopify URL Recieved");
        let url = response.cart.checkoutUrl;
        window.location.href = url;
      });
  };


  return( 
    <div class="checkOut">
      <button
        onClick={()=> {
          getCheckOutLink(cartId);
        }}
      >
        Proceed to Checkout
      </button>
    </div>
    
  )
}