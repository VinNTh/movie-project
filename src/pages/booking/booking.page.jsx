import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

export default function Booking() {
    const useStyles = makeStyles({
        choiceChair: {
            backgroundColor: 'red',
            "&:hover": {
                backgroundColo: 'green',
            }
        }
    })
    const classes = useStyles();
    return (
        <div>
            <h1>Booking</h1>
            <section>
                <Button className={classes.choiceChair}>
                Ghế số 1
                </Button>
            </section>
            
        </div>
    )
}
