import React, { Component } from 'react';
import { Header, Container, Segment} from 'semantic-ui-react';
import DragDrop from './dragndrop/DragDrop'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
          as='h3'
          content='Collection Analyzer'
          textAlign='center'
        />
        <Container text>
          <Segment.Group>
            <Segment>
              <DragDrop />
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
