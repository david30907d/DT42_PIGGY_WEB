import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment } from 'semantic-ui-react'

export default class HeaderAndMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='輸入影像設定'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='訓練資料標注'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='即時影像辨識'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='辨識結果分析'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>

                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>母豬分娩/發情影像識別系統</Header.Content>
                </Header>
                <Image
                    centered
                    size='large'
                    src='/images/wireframe/centered-paragraph.png'
                />
                <Segment>
                    <img src='/images/wireframe/media-paragraph.png' />
                </Segment>

            </div>
        )
    }
}
