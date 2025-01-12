import { items } from "../FoodSection/Card"

const CartItem = ()=>{
    return(
        <>
        <div className="item1">
            <div className="itemImage"><img src={Img} alt="" /></div>
            <div className="itemDetails">
            <div className="itemName">{foodName}</div>
                <div className="itemPrice">{price}</div>
                {/* <div className="itemDescryption">{foodInfo}</div> */}
                <button>Buy</button>
            </div>
        </div>
        </>
    )
}
export default CartItem