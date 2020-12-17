import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, Space, Button } from 'antd'
import { login } from './helpers/login'
import DeezerLogo from './deezerLogo.svg'
import { StateContext, DispatchContext } from './context/Context'
import { reducer, initialState } from './reducers'
import Search from './components/Search/Search'
import Homepage from './components/Homepage/Homepage'
import ArtistPage from './components/ArtistPage/ArtistPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.less'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Router>
            <Layout>
              <Header />
              <Layout.Content className="site-layout">
                <div className="site-layout-background">
                  <Switch>
                    <Route path="/artists">
                      <ArtistPage />
                    </Route>
                    <Route exact path="/search">
                      <Search />
                    </Route>
                    <Route>
                      <Homepage />
                    </Route>
                  </Switch>
                </div>
                <div onClick={login} className="deezer">
                  <Space align="baseline">
                    <p>Powered by Deezer</p>
                    <Button type="link" href="https://deezer.com" target="_blank" name="deezer logo">
                      <img src={DeezerLogo} alt="Deezer Logo" className="deezerLogo" />
                    </Button>
                  </Space>
                </div>
              </Layout.Content>
              <Footer />
            </Layout>
          </Router>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  )
}

export default App
