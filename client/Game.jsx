import React from 'react'
import { Card, CardTitle, CardText, CardActions, ProgressBar, Button } from 'react-toolbox'

const Vote = ({ name, value }) => 
    <Card style={{ width: 80, textAlign: 'center', margin: 8 }}>
        <CardTitle
            style={{ textAlign: 'center', margin: 'auto' }}
            title={value.toString()}
            subtitle={name} 
        />
    </Card>
    
const Choice = ({ value }) =>
    value === 'Pass' ?
        <Button icon='local_cafe' accent /> :
        <Button label={value} accent />
    
const Votes = ({ votes }) =>
    <CardText style={{ display: 'flex' }}>
        {votes.map(({ name, value }, i) => <Vote key={i} name={name} value={value} />)}
    </CardText>
    
const Choices = ({ choices }) =>
    <CardActions>
        {choices.map((value, i) => <Choice key={i} value={value} />)}
    </CardActions>

export const Game = ({ title, subtitle, votes, choices, playerCount }) =>
    <Card>
        <CardTitle title={title} subtitle={subtitle} />
        <Votes votes={votes} />
        <CardText>
            <ProgressBar type='linear' mode='determinate' value={votes.length} value={playerCount} />
        </CardText>
        <Choices choices={choices} />
    </Card>
