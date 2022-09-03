import { Grid } from "@material-ui/core"
import React, { Fragment } from "react"
import CommonButton from "../common/btn"
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Typography} from "@material-ui/core";
import {HiOutlineLogout} from "react-icons/hi"
import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./customerSignup.module.css"
import CustomerService from "../../services/customerService/customerService";

export const CustomerSignup = (props)=>{
    const [customerObj,setCustomerObj] = useState({
        nic: "",
        name: "",
        nicPhoto: "",
        licenseNo: "",
        licensePhoto: "",
        contactNo: "",
        email: "",
        password: ""
    });
    const [formData,setFormData] = useState(new FormData())

    return(
        <Fragment>
            <Grid container spacing={0} className={classes.customerSignupContainer}>
                <Grid item xs={12} style={{display: "flex",flexDirection: "column",alignItems: "end",justifyContent: "end",height:"10%",marginRight:"5%"}}>
                    <Link to="/login">
                        <HiOutlineLogout className={classes.fa}/>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",height:"90%"}}>
                        <div className={classes.container}>
                            <Grid container spacing={1} className={classes.gridContainer}>
                                <Grid container item xs={12} style={{position:"relative",height:"80%"}}>
                                    <ValidatorForm style={{width:"100%",height:"100%",position:"relative"}}>
                                        <Grid container item xs={12} style={{height:"100%",position:"relative"}}>
                                            <Grid container item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        Nic
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        label="Enter Your Nic Number"
                                                        onChange={(e)=>{
                                                            setCustomerObj((prevState)=>{
                                                               return{
                                                                ...customerObj,
                                                                nic:e.target.value
                                                               } 
                                                            })
                                                        }}
                                                        name="nicNumber"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        value={customerObj.nic}
                                                        validators={['required']}
                                                        errorMessages={['this field is required', 'Nic Number is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        Name
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        label="Enter Your Full Name"
                                                        onChange={(e)=>{
                                                            setCustomerObj((prevState)=>{
                                                                return{
                                                                    ...customerObj,
                                                                    name:e.target.value
                                                                }
                                                            })
                                                        }}
                                                        name="fullName"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        value={customerObj.name}
                                                        validators={['required']}
                                                        errorMessages={['this field is required', 'Full Name is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        Nic Picture
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        placeholder="Nic Picture"
                                                        onChange={(e)=>{
                                                            console.log(e.target.files[0]);
                                                            console.log(e.target.files[0].name);
                                                            setFormData((prevState)=>{
                                                                let data = formData
                                                                data.append("nicPhoto",e.target.files[0],e.target.files[0].name)
                                                                return data;
                                                            })
                                                        }}
                                                        name="nicPicture"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                       // value={customerObj.nicPhoto}
                                                        validators={['required']}
                                                        type={"file"}
                                                        errorMessages={['this field is required', 'User Name is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        License Picture
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        placeholder="License Picture"
                                                        onChange={(e)=>{
                                                            console.log(e.target.files[0]);
                                                            console.log(e.target.files[0].name);
                                                            setFormData((prevState)=>{
                                                                let data = formData
                                                                data.append("licensePhoto",e.target.files[0],e.target.files[0].name)
                                                                console.log(data.getAll("nicPhoto"))
                                                                return data;
                                                            })
                                                        }}
                                                        name="licensePicture"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        //value={customerObj.licensePhoto}
                                                        validators={['required']}
                                                        type={"file"}
                                                        errorMessages={['this field is required', 'User Name is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        License No
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        label="Enter Your License No"
                                                        onChange={(e)=>{
                                                            setCustomerObj((prevState)=>{
                                                                return{
                                                                    ...customerObj,
                                                                    licenseNo:e.target.value   
                                                                }
                                                            })
                                                        }}
                                                        name="licenseNo"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        value={customerObj.licenseNo}
                                                        validators={['required']}
                                                        errorMessages={['this field is required', 'License No is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        Contact No
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        label="Enter Your Contact No"
                                                        onChange={(e)=>{
                                                            setCustomerObj((prevState)=>{
                                                                return{
                                                                    ...customerObj,
                                                                    contactNo:e.target.value   
                                                                }
                                                            })
                                                        }}
                                                        name="contactNo"
                                                        size="small"
                                                        type="Number"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        value={customerObj.contactNo}
                                                        validators={['required','isNumber']}
                                                        errorMessages={['this field is required', 'Contact No is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        Email Address
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        label="Enter Your Email Address"
                                                        onChange={(e)=>{
                                                            setCustomerObj((prevState)=>{
                                                                return{
                                                                    ...customerObj,
                                                                    email:e.target.value   
                                                                }
                                                            })
                                                        }}
                                                        name="emailAddress"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        value={customerObj.email}
                                                        validators={['required','isEmail']}
                                                        errorMessages={['this field is required', 'Email Address is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} style={{height:"25%",position:"relative"}}>
                                                <Grid item xs={12} style={{height:"30%",display:"flex",alignItems:"center"}}>
                                                    <Typography variant="body1" style={{display:"flex",marginLeft:"20%"}}>
                                                        Password
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{height:"70%",position:"relative"}}>
                                                    <TextValidator
                                                        label="Enter Your Password"
                                                        onChange={(e)=>{
                                                            setCustomerObj((prevState)=>{
                                                                return{
                                                                    ...customerObj,
                                                                    password:e.target.value   
                                                                }
                                                            })
                                                        }}
                                                        name="password"
                                                        size="small"
                                                        style={{position:"absolute",width:"60%",height:"50%",display:"flex",inset:"0 0 0 0",margin:"auto"}}
                                                        value={customerObj.password}
                                                        validators={['required']}
                                                        errorMessages={['this field is required', 'Password is not valid']}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ValidatorForm>
                                </Grid>
                                <Grid container item xs={12} style={{position:"relative",height:"20%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Grid item xs={4} style={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <CommonButton
                                            variant = {'contained'}
                                            color = {"primary"}
                                            label = {"Save"}
                                            size = {"medium"}
                                            style = {{display:"flex",width:"50%"}}
                                            onClick={async(e)=>{
                                                setFormData((prevState) => {
                                                   return formData.append("dto",new Blob([JSON.stringify(customerObj)],{type:"application/json"}))
                                                })
                                                if(window.confirm('Do you want to save this customer') == true){
                                                    let response = await CustomerService.createPost(formData)
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={4} style={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <CommonButton
                                            variant = {'contained'}
                                            label = {"Update"}
                                            size = {"medium"}
                                            style = {{display:"flex",width:"50%",backgroundColor:"grey"}}
                                            onClick={async(e)=>{
                                                setFormData((prevState) => {
                                                   return formData.append("dto",new Blob([JSON.stringify(customerObj)],{type:"application/json"}))
                                                })
                                                if(window.confirm('Do you want to update this customer') == true){
                                                    let response = await CustomerService.createPut(formData)
                                                }
                                            }}
                                        />
                                    </Grid><Grid item xs={4} style={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <CommonButton
                                            variant = {'contained'}
                                            color = {"error"}
                                            label = {"Delete"}
                                            size = {"medium"}
                                            style = {{display:"flex",width:"50%"}}
                                            onClick={async(e)=>{
                                                if(window.confirm('Do you want to delete this customer') == true){
                                                    let response = await CustomerService.deleteCustomer(customerObj.nic)
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                </Grid>
            </Grid>
        </Fragment>
    )
}