import "./task-style.css"
const Task = (props) => {
    let variable = false ;
    let claseVerdadero = {color: "green"};
    let claseFalsa= { color: "white"}
  return (
    <div className="card">
      <h1 style={{ color: "red" }}>Primera Tarea</h1>
      <h2 style={props.ready ? claseVerdadero : claseFalsa}>{props.ready ? "Tarea realizada" : "tarea pendiente"}</h2>
      <h1 style = {variable ? claseVerdadero : claseFalsa}> Clase condicional </h1>
    </div>
  );
};

export default Task;
