import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CounterWithStep from "./problems/01-counter-with-step/CounterWithStep";
import TodoApp from "./problems/03-todo-app/TodoApp";

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
        <p>Coming Soon...</p>
      </section>

      <section className="question-card">
        <h2>Question 3</h2>
        <h3>Todo App</h3>
        <TodoApp />
      </section>

      <Footer />
    </>
  );
}

export default App;