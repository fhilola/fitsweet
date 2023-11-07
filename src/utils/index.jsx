import './Index.scss'
function Container({children}){
    return (
        <div className="container">{children}</div>
    )
}
function Input({type, placeholder}){
    return(
        <input type={type} placeholder={placeholder}/>
    )
}
function Button({text}){
    return (
        <button className='main-button'>{text}</button>
    )
}
function Title({text}){
    return(
        <h3>{text}</h3>
    )
}
function MainTitle({text}){
    return(
        <h1 className='main-title'>{text}</h1>
    )
}
function Description({text}){
    return(
        <p className='descrition'>{text}</p>
    )
}
function SecondaryDescription({text}){
    return(
        <p className='secondary__descrition'>{text}</p>
    )
}
export {Container, Input, Button, Title, MainTitle, Description}