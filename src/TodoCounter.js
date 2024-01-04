// const styles = {
//   backgroundColor: 'red'
// }
import "./TodoCounter.css";

function TodoCounter({ complet, total }) {
  return (
    <header className="divTiltle">
      <h1
        className="todoTilte"
        // style={{
        //   color: "#360b41",
        //   fontSize: "40px",
        //   backgroundColor: "#ccc9aa",
        //   textAlign: "center",
        //   margin: "10px",
        //   padding: "20px",
        //   borderRadius: "50px",
        //   boxShadow: "2px 2px 2px 1px #360b41"
        // }}
      >
        Has Completado {complet} de {total} TODOs
      </h1>
    </header>
  );
}

export { TodoCounter };
