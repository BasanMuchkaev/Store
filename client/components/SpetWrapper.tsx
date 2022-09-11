import React from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '../node_modules/@mui/material/index';

interface StepWrapperProps {
    activeStep: number;
}
const steps = ['Информация о треке', 'Загрузить обложку', 'Загрузить сам трек']
const StepWrapper: React.FC <StepWrapperProps> = ({activeStep, childeren}) => {
    return (
        <Container>
            <Stepper activeStep = {activeStep}>
                {steps.map((step,index) => 
                    <Step
                    key={index}
                    completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                    )}
            </Stepper>
            <Grid container justifyContent='center' style={{margin: '70px 0', height: 270}}>
                    <Card style={{width:600}}>
                        {childeren}
                    </Card>
            </Grid>
        </Container>
    )
}

export default StepWrapper