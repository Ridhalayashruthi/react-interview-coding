import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CounterWithStep from "./problems/01-counter-with-step/CounterWithStep";
import EmployeeSearch from "./problems/02-employee-search/EmployeeSearch";
import TodoApp from "./problems/03-todo-app/TodoApp";
import Accordion from "./problems/04-accordion/Accordion";

function App() {
  return (
    <>
      <Header />

      <section  className="question-card">
        <h2>Question 1</h2>
        <h3>Counter with Step</h3>
        <CounterWithStep />
      </section>

      <section className="question-card">
        <h2>Question 2</h2>
        <h3>Employee Search</h3>
        <EmployeeSearch />
      </section>

      <section className="question-card">
        <h2>Question 3</h2>
        <h3>Todo App</h3>
        <TodoApp />
      </section>

      <section className="question-card">
        <h2>Question 4</h2>
        <h3>Accordion</h3>
        <Accordion />
      </section>

      <Footer />
    </>
  );
}

export default App;