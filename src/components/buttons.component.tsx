import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

export function ButtonsComponent() {
    const [counter, setCounter] = useState<number>(1);

    function onClick(inc: number) {
        setCounter(() => counter + inc)
    }

    return (
        <>
            <Button variant="contained" onClick={() => onClick(1)} >Counter </Button>
            <Button variant="contained" onClick={() => onClick(10)} >Counter 10</Button>

            <Typography variant='h1' >{counter}</Typography>
        </>
    )
}