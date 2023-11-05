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
        <h1>{text}</h1>
    )
}
export {Container, Input, Button, Title, MainTitle}