import './App.css';
import { MyButton } from './MyButton';

const user = {
  name: 'hoge',
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
}

export default function App() {
  let content = false;

  const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
    >
      {product.title}
    </li>
  );



  return (
    <div className="App">
      <h1>{ user.name }</h1>
      <MyButton />
      <MyButton />
      <br />
      <img
        className="hoge" src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      {/* { content} */}
      {content ? (<MyButton />) : (content)}

      <ul>{listItems}</ul>
    </div>
  );
}
