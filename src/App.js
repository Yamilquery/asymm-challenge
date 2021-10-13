import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Card from './components/Card';
import Search from './components/Search';

export default function App() {
  return (
    <div className="App pt-4">
      <h1 className="text-2xl">Items</h1>

      <div className="px-4">
        <Search onChange={() => console.log("YHEA")} />
      </div>

      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
