const Cart = () => {

  const cartItems = [
    {
      id: 1,
      title: "React JS Course",
      price: 999
    },
    {
      id: 2,
      title: "Java Full Stack",
      price: 1999
    }
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Your Cart
      </h1>

      <div className="max-w-3xl mx-auto">

        {
          cartItems.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-4"
            >

              <h2 className="font-semibold">
                {item.title}
              </h2>

              <p>
                ₹ {item.price}
              </p>

            </div>

          ))
        }

        <div className="bg-gray-200 p-4 rounded-lg flex justify-between font-bold text-lg">

          <span>Total</span>

          <span>₹ {total}</span>

        </div>

        <button
          className="w-full mt-6 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Checkout
        </button>

      </div>

    </div>

  );
};

export default Cart;