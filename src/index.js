import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Compoprops, { UserCard } from "./CompoProps";
import { ButtonDos, ButtonUno } from "./Button";
import Task from "./Task";
import Saludar from "./Saludar";
import Posts from "./Post";

//const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
//const Prueba = () => <h1>componente</h1>
/* const Prueba = () => {
    return <h1>componente</h1>
} 
const Prueba = () => {
const variable = true;
    return <h1>{variable ? "verdadero" : "falso"}</h1>;
};
const Prueba = () => {
    const objeto = { nombre: "nombreUno", apellido: "apellidoUno" };
    return <h1><h1>{objeto.nombre}</h1><h1>{objeto.apellido}</h1></h1>;
    //return <h1>{JSON.stringify(objeto)}</h1>;
};
const Prueba = () => {return}
*/

//root.render(<h1>Hello word</h1>);
//root.render(Prueba());
//root.render(<div>{Prueba()}</div>);
//root.render(<Prueba></Prueba>);
// Self closing tag
//root.render(<Prueba />);
//root.render(<>
/* <Compoprops nombre="nombreUno"/>
    <Compoprops nombre="nombre2"/>
    <Compoprops nombre="nombre3"/> */
/* <Compoprops numero = {10}/>
    <Compoprops boleano = { false }/>
<Compoprops matriz = {[1,2,3]}/> */
//</>)
/* 
const users = [
    {
        id: 1,
        name: "Ryan Ray",
        image: "https://robohash.org/user1"
    },{
        id: 2,
        name: "Joe Jhonson",
        image: "https://robohash.org/user2"
    },{
        id: 3,
        name: "Pepe Juan",
        image: "https://robohash.org/user3"
    }
] */
const Counter = () => {
  let stockInit = 10;
  const [cantCard, setCantCard] = useState(0);
  const [stock, setStock] = useState(stockInit);
  const [menssage, setMenssage] = useState('');
  useEffect(()=>{console.log('cardChange :>> ', cantCard);},[cantCard])
  const handlerCountIncrement = () => {
    if (stock > 0){
        setCantCard(cantCard + 1);
        setStock(stock - 1)
    }
  };
  const handlerCountDecrement = () => {
    if(stock > 0){
        setCantCard(cantCard - 1);
        setStock(stock + 1)
    }
  };
  const handlerChangeInput = (event) => {
    setMenssage(event.target.value)
    console.log('event.target.value :>> ', event.target.value);
  }
  return (
    <>
      <h1>carrito : {cantCard}</h1>
      <h1>stock : {stock}</h1>
      <input onChange={handlerChangeInput}></input>
      <br></br>
        <button onClick={()=>alert('El mensaje es '+ menssage)}>Mostrar mensaje</button>
      <br></br>
      <br></br>
      <button onClick={handlerCountIncrement}>Increment</button>
      <br></br>
      <button onClick={handlerCountDecrement}>Decrement</button>
      <br></br>
    </>
  );
};
root.render(
  <>
    <Counter />
    {/* {users.map(user=>{
        return <h1>{user.name}</h1>
    })}
    {users.map((user, index)=> {
        return (
            <div key={index}>
                <h1>{user.name}</h1>
                <img src= {user.image} alt={'imagen de '+user.name}/>
            </div>
        )
    })} */}
    <ButtonUno />
    <Posts />
    <Saludar></Saludar>
    <Task ready={true} />
    <ButtonDos text="textoBotonUno" />
    {/*
     <Button text={false}/>
    <Button text={10}/>
    <Button/> 
*/}
    {/*  <UserCard 
        name = "nombre Uno"
        amount = {300}
        married = {true}
        address = {{street:"streetUno", city: "cityUno"}}
        points = {[99,33.4, 22,2]}
        greet = {()=> alert("hello")}
    />
     <UserCard 
        name = "nombre Dos"
        amount = {300}
        married = {false}
        address = {{street:"streetDos", city: "cityDos"}}
        points = {[99,33.4, 22,2]}
        greet = {()=> alert("hello")}
    /> */}
  </>
);
