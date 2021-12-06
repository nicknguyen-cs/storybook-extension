import logo from './logo.svg';
import './App.css';
import { Heading, Button } from '@contentstack/venus-components';
import '@contentstack/venus-components/build/main.css';

function App() {
  return (
    <div>
      <Heading tagName="h2" text="Extension building using Venus component" />
      <Button
        buttonType="primary"
        onClick={() => {
          console.log('You clicked on Venus button');
        }}
      >
        Click on me
      </Button>
    </div>
  );
}

export default App;
