

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card w-auto h-full bg-slate-300 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="text-xl">Price: <span className="font-bold">${price}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;