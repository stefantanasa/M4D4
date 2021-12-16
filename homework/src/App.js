import "./App.css";
import WarningSign from "./components/WarningSign";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/My-badge";
import SingleBook from "./components/SingleBook";
import horrorBooks from "./components/horrorBooks.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text=" This is a danger warning!" />
        <MyBadge color="success" name="This is a green badge" />
        <SingleBook book={horrorBooks[0]} />
        <BookList books={horrorBooks} />
      </header>
    </div>
  );
}

export default App;
