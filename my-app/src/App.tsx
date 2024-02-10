import React from 'react';
import './App.css';
import { Button , HOne, Hero, Image, Label, RadioButton, Table } from '@WillRRC/template-react-component-library';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <Button label='Hello JP'></Button>
              <Table tableheader='header' tableinput='middle' tablefoot='footer'></Table>
              <Label labelname='Wills label. ^ a tables above'></Label>
              <RadioButton radionames='True' radiofalse='False'></RadioButton>
              <Hero heroinput='spider.png'></Hero>
              <HOne textinput='^Shpidaman'></HOne>
              <Image imageinput='otter.png'></Image>
      </header>
    </div>
  );
}

export default App;
