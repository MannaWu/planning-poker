import { Card, CardTitle, CardText, List, ListItem } from 'react-toolbox'
import { connect } from 'react-redux'

const Player = ({name}) => (
    <ListItem
        avatar={<span style={{lineHeight: '40px'}}>{name[0]}</span>}
        caption={name}
        rightIcon='star'
    />
)

const _Players = ({players}) => (
    <Card style={{ width: 320, display: 'inline-block' }}>
        <CardTitle title='Players' subtitle='currently online' />
        <CardText>
            <List>
                {[ ...players].map(([key, value]) => <Player key={key} name={value} />)}
            </List>
        </CardText>
    </Card>
)

export const Players = connect(
    state => ({
        players: state.users
    })
)(_Players)
