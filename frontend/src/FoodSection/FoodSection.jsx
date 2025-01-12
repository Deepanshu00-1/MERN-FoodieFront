import "./foodsection.css"
import FoodData1 from "./foodItem"
import FoodCard from "./Card"

const displayFoodCard = (FoodData1)=>{
    return(
        <FoodCard
        Id = {FoodData1.id}
        Img = {FoodData1.imgUrl}
        foodName = {FoodData1.foodName}
        foodInfo = {FoodData1.foodInfo}
        Btn = {FoodData1.Btn}
        Btn2 = {FoodData1.Btn2}
        price = {FoodData1.price}
        priceAmount={FoodData1.priceAmount}
        />
    )
}
const FoodSection =()=>{

    return(
        <div className="Foods">
            <div className="head">
                <h1>Delicious Dishes Awaits You Here👇</h1>
            </div>
            <div className="foodCards">
                {FoodData1.map(displayFoodCard)}
            </div>
        </div>
    )
}
export default FoodSection