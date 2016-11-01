import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { App, Anchor, Header, Footer, Title } from 'grommet';
import TodoAppDashboard from './components/TodoAppDashboard';


class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" large={true}
          pad={{horizontal: 'medium'}}>
          <Title>Grommet Toolbox38</Title>
        </Header>
        <TodoAppDashboard />
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <Anchor href="http://grommet.io" target="_blank">Grommet</Anchor>!
          </p>
        </Footer>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
