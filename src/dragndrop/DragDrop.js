import React from 'react';
import { Header  } from 'semantic-ui-react';
import Dropzone from 'react-dropzone'
import csv from 'csv';

function onDrop(files) {
  if(files.length > 1)
    throw new Error('Only 1 file allowed!')
  const reader = new FileReader();
  reader.onload = () => {
    const fileAsBinaryString = reader.result;
    csv.parse(fileAsBinaryString, {}, (err, data) => {
      if(err) console.error(err);
      console.log(data);
    });
  };
  reader.onabort = () => console.log('file reading was aborted');
  reader.onerror = () => console.log('file reading has failed');

  reader.readAsBinaryString(files[0]);
}

function DragDrop(props) {
  return (
    <div className="app">
      <Header
        as='h3'
        content='DragDrop'
        textAlign='center'
        style={{
          margin: 0,
          padding: 0
        }}
      />
      <Dropzone 
        onDrop={onDrop}
      >
        <p>Drop your BGG collection.csv export here.</p>
      </Dropzone>
    </div>
  );
}

export default DragDrop;