import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Card from './components/Card';

export default function App() {
  return (
    <div className="App">
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
