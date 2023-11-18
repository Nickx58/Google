import React from "react";
import {
  MdAndroid,
  MdAccessibility,
  MdAreaChart,
  MdBathtub,
  MdBrightness2,
} from "react-icons/md";
import Button from '../components/Button'

function ButtonPage() {
  return (
    <div className="app">
      <h1>React Comp</h1>
      <div>
        <Button primary>
          <MdAndroid />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <MdAccessibility />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <MdAreaChart />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <MdBathtub />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <MdBrightness2 />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
