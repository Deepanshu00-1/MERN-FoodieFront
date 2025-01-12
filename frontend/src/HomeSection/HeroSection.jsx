import {useState} from 'react'
import "../../src/HomeSection/css/HeroSection.css"

function HeroSection(){
    const [menuVisible, setMenuVisible] = useState('none');
    const onSubmit = ()=>{
        setMenuVisible('none');
    }

    const onSubmit2 =()=>{
        setMenuVisible('flex');
    }

    const customClass = {
        display: menuVisible,
    }

    return (
        <>
        <div className="hero-section">
            <h1>Welcome to <b>FoodieFront</b></h1>
            <p><b>Where</b></p>
            <h3 data-text = "Delicious Moments Await"></h3>
            <button className="button1" onClick={onSubmit2}>View Full Menu</button>
            {/* <button className="button2">Book a Table</button> */}
        </div>
        <div className="menu" style={customClass}>
            <button onClick = {onSubmit}><i className="fa-solid fa-xmark" ></i></button>
        </div>
        </>
    )
}
export default HeroSection