import React from 'react';
import { Layout , Header, Drawer, Content, Navigation} from 'react-mdl'
import Router from './router.js'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 3 }
    }
    render() {
        return (
            <div style={{height: '800px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<span><strong>Clean The Forest</strong></span>}>
                    <Navigation>
                        <a href="/map">Map</a>
                        <a href="/panel">Panel</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>
                <Content>
                    <div>
                        <Router></Router>
                    </div>
                </Content>

            </Layout>
        </div>
        );
    }
}

export default HomePage