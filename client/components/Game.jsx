import React from 'react'
import { Card, CardTitle, CardText } from 'react-toolbox'
import { Votes } from './Votes'
import { VotesProgressBar } from './VotesProgressBar'
import { Choices } from './Choices'     

export const Game = ({ title, subtitle, choices, playerCount }) =>
    <Card style={{ width: 640, display: 'inline-block', marginRight: 12 }}>
        <CardTitle title={title} subtitle={subtitle} />
        <Votes />
        <CardText>
            <VotesProgressBar type='linear' mode='determinate' max={playerCount} />
        </CardText>
        <Choices choices={choices} />
    </Card>
