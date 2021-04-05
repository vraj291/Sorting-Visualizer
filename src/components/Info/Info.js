import React from 'react'
import {list_algos} from '../../algorithms/Algo_info'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';
import {Button} from '../Button/Button'
import './Info.css'

export const Info = (props) => {
    let algo = list_algos.find(e => e.value == props.algo)

    const MyCard = styled(Card)(props.style)
    
    return(
        <div>
            <MyCard className='card' variant="outlined">
                <CardHeader
                    className='card-header'
                    title={algo.label}
                />
                <CardContent className='card-contents'>
                    <Typography paragraph>{algo.desc}</Typography>
                    <div>
                        <Typography paragraph>Best Case Complexity: {algo.best_time_comp}</Typography>
                        <Typography paragraph>Average Case Complexity: {algo.avg_time_comp}</Typography>
                        <Typography paragraph>Worst Case Complexity: {algo.worst_time_comp}</Typography>
                        <Typography paragraph>Space Complexity: {algo.space_comp}</Typography>
                    </div>
                </CardContent>
                <CardActions className='card-actions'>
                    <Button text='Learn More' func={() => window.location=`${algo.extra_info}`}></Button>
                </CardActions>
            </MyCard>
        </div>
    )
}