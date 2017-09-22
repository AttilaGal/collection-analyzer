import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { GamesByYear } from './charts/GamesByYear';

export default class StatisticsOverview extends Component {
  render() {
    return (<GamesByYear />);
  }
}