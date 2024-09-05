const menu = [
  {
    id: 1,
    name: "Cappuccino",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
    price: "$5.20",
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true,
  },
  {
    id: 2,
    name: "House Coffee",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg",
    price: "$3.50",
    rating: 4.85,
    votes: 15,
    popular: true,
    available: true,
  },
  {
    id: 3,
    name: "Espresso",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
    price: "$2.50",
    rating: 4.9,
    votes: 55,
    popular: false,
    available: true,
  },
  {
    id: 4,
    name: "Coffee Latte",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg",
    price: "$4.50",
    rating: 5.0,
    votes: 23,
    popular: false,
    available: true,
  },
  {
    id: 5,
    name: "Chocolate Coffee",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
    price: "$4.00",
    rating: "4.65",
    votes: 122,
    popular: false,
    available: false,
  },
  {
    id: 6,
    name: "Valentine Special",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg",
    price: "$5.50",
    rating: null,
    votes: 0,
    popular: false,
    available: true,
  },
];

const CoffeeList = () => {
  return (
    <>
      <div className="relative min-h-screen bg-black">
        <img src="bg-cafe.jpg" alt="" className="w-full h-auto object-cover" />
        <div className="absolute bg-black opacity-50 "></div>
        <div className="relative -top-10 -bottom-10 flex flex-col items-center  p-6 bg-lightblack  rounded-2xl mx-4 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2  md:-top-20 ">
          <div className="text-center">
            <h1 className="text-3xl mb-2 text-white">Our Collections</h1>
            <p className="text-lightGrey text-base max-w-lg mx-auto">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <div className="space-x-3 py-4">
              <button className="bg-lightGrey rounded-md px-3 text-white">
                All Products
              </button>
              <button className="text-white">Available Now</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 p-4 w-full sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <div key={item.id} className="p-5 rounded-lg shadow-md ">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-t-lg w-full"
                  />
                  {item.popular && (
                    <span className="absolute top-2 left-2 bg-yellow-400 rounded-full px-2 py-1 capitalize text-sm">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-white w-full flex justify-between items-center mt-2">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="bg-green-500 rounded-lg px-2 py-1 text-xs">
                    {item.price}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    alt="rating"
                    className="w-4 h-4 mr-1"
                  />
                  <span className="text-sm text-white">
                    {item.rating
                      ? `${item.rating} (${item.votes} votes)`
                      : "No ratings"}
                  </span>
                </div>
                {!item.available && (
                  <span className="text-softred flex justify-end mt-2">
                    Sold Out
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-slate-800 p-10 ">
        <h1 className="text-lightGrey">Developed by Dagmawi Milkias</h1>
        <p className="text-lightGrey">
          You can find out the project{" "}
          <a
            href="https://github.com/Dagi2004/CoffeListing"
            className="text-lightGreen"
          >
            Here
          </a>
        </p>
      </footer>
    </>
  );
};

export default CoffeeList;
