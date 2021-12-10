import React, { useEffect, useState } from "react";
import './App.css';
import { Radio, Select, Heading, Button } from '@contentstack/venus-components';
import '@contentstack/venus-components/build/main.css';
function App(props) {

  return (
    <div>
      <Heading tagName="h2" text="New extensions" />
      <span>
        <Button 
          buttonType="secondary"
          icon="PublishAsset"
          >
          Upload New File
        </Button>
        
        
      </span>
    </div>
  );
}

export default App;
