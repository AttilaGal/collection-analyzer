import React, { Component } from 'react';
import { Header, Container, Segment} from 'semantic-ui-react';
import DragDrop from './dragndrop/DragDrop';
import StatisticsOverview from './StatisticsOverview';
import store from '../store';
import constants from '../constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {appState: store.getState() };
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState().toJS());
      this.setState({appState: store.getState()});
    });
  }

  componentWillUnmount() {
    store.unsubscribe();
  }

  showContent = () => {
    switch(this.state.appState.get('status')) {
      case constants.AppStatus.WAITING_FOR_CSV:
        return (<DragDrop />);
      case constants.AppStatus.CSV_LOADED:
        return (<StatisticsOverview />);
      default:
        return;
    }
  }

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
              {this.showContent()}
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
