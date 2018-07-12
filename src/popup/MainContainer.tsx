import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Router, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';
import CreateWallet from './pages/CreateWallet';
import SaveMnemonic from './pages/SaveMnemonic';
import ImportMnemonic from './pages/ImportMnemonic';
import Login from './pages/Login';
import Home from './pages/Home';
import AccountDetail from './pages/AccountDetail';
import Send from './pages/Send';
import Receive from './pages/Receive';
import SendConfirm from './pages/SendConfirm';

@inject('store')
@observer
export default class MainContainer extends Component<IProps, IState> {
  public render() {
    const { history, store: { walletStore: { loading } } }: any = this.props;

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Loading loading={loading} />
        <div style={{ width: '100%', height: '100%' }}>
          <Router history={history}>
            <Switch>
              <Route exact path="/create-wallet" component={CreateWallet} />
              <Route exact path="/save-mnemonic" component={SaveMnemonic} />
              <Route exact path="/import" component={ImportMnemonic} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/account-detail" component={AccountDetail} />
              <Route exact path="/send" component={Send} />
              <Route exact path="/send-confirm" component={SendConfirm} />
              <Route exact path="/receive" component={Receive} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

interface IProps {
}

interface IState {
}