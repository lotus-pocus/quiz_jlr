import logo from "./images/JLR logo.png";

function Header() {
    return (
       <header>
        <img classname= "logo" src={logo}/>
       </header>
    );
}

export default Header