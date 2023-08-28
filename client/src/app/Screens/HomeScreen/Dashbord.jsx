import React from "react";
import { Container, Typography, Card, CardContent, Grid, CardActions, Button } from "@mui/material";
import './home.css'
import { useNavigate } from "react-router-dom";

function Dashbord() {
    const navigate = useNavigate();
    return (
        <div className="container-home">
        <Container  maxWidth="lg" sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Welcome To our Campus Hub 👋😊👩‍🎓
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Profile
                            </Typography>
                            <Typography variant="body2">
                                View and update your profile information.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Notes Taking
                            </Typography>
                            <Typography variant="body2">
                                Check your Add your notes and Acces the anywhare.
                                <CardActions>
                                    <Button size="medium" onClick={()=>{
                                        navigate('/notes')
                                    }}>Click To OPEN</Button>
                                </CardActions>
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Meeting System
                            </Typography>
                            <Typography variant="body2">
                            The student online meeting system facilitates seamless virtual collaboration among students.<br></br> It enables interactive discussions, project planning, and knowledge sharing.
                            </Typography>
                            <CardActions>
                                <Button onClick={()=>{
                                    navigate('/meet')
                                }}>Click TO open</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>



                {/* doc grid */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Instant Document preparation
                            </Typography>
                            <Typography variant="body2">
                            Instant document preparation streamlines content <br></br>creation, offering swift and efficient generation, editing, and formatting, enhancing productivity and collaboration
                            </Typography>
                            <CardActions>
                                <Button onClick={()=>{
                                    navigate('/doc')
                                }}>Click TO open</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Instant Mail Query Rising
                            </Typography>
                            <Typography variant="body2">
                            instant mail system enables real-time communication through email, facilitating rapid message transmission and reception,<br></br> promoting efficient correspondence in various contexts.
                            </Typography>
                            <CardActions>
                                <Button onClick={()=>{
                                    navigate('/mail')
                                }}>Click TO open</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}

export default Dashbord;
