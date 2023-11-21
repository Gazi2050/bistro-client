import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert(`${name} added to your cart`)
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <div className="card w-auto h-full bg-slate-300 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="text-xl">Price: <span className="font-bold">${price}</span></p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline text-yellow-400 border-b-4 border-0 bg-black hover:bg-yellow-400 hover:text-black">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;