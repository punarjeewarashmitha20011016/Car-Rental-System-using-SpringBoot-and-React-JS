import React, { Fragment } from "react";
import img1 from "../../assets/img/img.jpg";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";



export const Cards = (props)=>{
    return(
        <Fragment>
            <div className={props.style}>
                <Grid container spacing={0} style={{width:"100%",height:"100%"}}>
                    <Grid container item xs={8}>
                        <Grid item xs={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Typography component="div" variant="h3" color={'white'}>
                                {props.Value}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{display:"flex",alignItems:"start",justifyContent:"center"}}>
                            <Typography component="div" variant="h7" color={'white'} width={'90%'} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    {props.Text}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {props.font}
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}