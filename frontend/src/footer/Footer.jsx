import "./footer.css"
import img from "../assets/app.png"

const Footer =()=>{
    return(
        <>
        <footer>
            <div className="app">
                <h2>For Better Experience Download <br /> <span>FoodieFront App</span> </h2>
                <img src={img} alt="" />
            </div>
            <div className="footer">
                <h3>FoodieFront</h3>
                <h3>COMPANY</h3>
                <h3>GET IN TOUCH</h3>
            </div>
        </footer>
        </>
    )
}
export default Footer