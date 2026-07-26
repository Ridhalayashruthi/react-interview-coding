import CounterWithStep from "./problems/01-counter-with-step/CounterWithStep";
// import EmployeeSearch from "./problems/02-employee-search/EmployeeSearch";
// import TodoApp from "./problems/03-todo-app/TodoApp";

function App() {
  return (
    <div className="container">
      <h1>React Interview Coding</h1>

      <section>
        <h2>1. Counter with Step</h2>
        <CounterWithStep />
      </section>

      <hr />

      {/* <section>
        <h2>2. Employee Search</h2>
        <EmployeeSearch />
      </section>

      <hr />

      <section>
        <h2>3. Todo App</h2>
        <TodoApp />
      </section> */}
    </div>
  );
}

export default App;