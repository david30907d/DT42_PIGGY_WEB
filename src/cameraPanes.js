import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = ['Camera 1', 'Camera 2', 'Camera 3'].map(key => {
    return {
        menuItem: key,
        render: () => <Tab.Pane attached={false}>請輸入 {key} 的 IP 等資訊</Tab.Pane>
    }
})

const cameraPanes = () => <Tab menu={{ pointing: true }} panes={panes} />

export default cameraPanes
