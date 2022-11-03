import React, { Component } from 'react'
import withRouter from './withRouter'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';

import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Link } from "react-router-dom"

class Useparam extends Component {

  state = {
    data: {}
  }

  getData = () => {

    console.log(this.props._id)
    this.setState({
      open: true,
    })
    try {
      fetch(`https://empappregular.herokuapp.com/getPostById/${this.props.params._id}`)
        .then(response => response.json())
        .then(result => {

          this.setState({
            data: result
          })
          this.setState({
            open: false,
          })
          console.log(result)
        })
    } catch (error) {
      console.log('error')
    }


  }

  componentDidMount() {
    this.getData();
  }


  render() {
    const date = new Date(this.state.data.date)
    return (
      <>
     

        <Box >

          <Container>

            <Grid container spacing={2} style={{ margin: '1em 0em' }}>

              <Grid item lg={3} md={4} sm={6} xs={12} >
                <Card sx={{ Width: '100%', }} style={{ textAlign: 'center', gap: '1em', height: '100%', boxShadow: '10px 10px 5px lightblue gray', border: '1px solid gray' }}>

                  <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                    <CardActionArea>

                      <img src={this.state.data.images ? this.state.data.images : 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'} alt='img' style={{ "width": '100%' }}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/screen-shot-2017-11-16-at-3.50.20-pm-1.png";
                        }}


                      />

                      <Box style={{ bottom: '0px' }}>

                        <Typography>  Data: {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}</Typography>
                        <Typography>Time :
                          {date.getHours()}/{date.getMinutes()}/{date.getSeconds()}
                        </Typography>
                      </Box>

                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {this.state.data.about}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {this.state.data.subtitle}
                        </Typography>


                      </CardContent>

                    </CardActionArea>
                    <Box style={{ bottom: '0px', left: '0px', right: '0px' }}>
                      <CardHeader style={{ display: 'flex', flexDirection: 'row', justifyItems: 'space-between' }}
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            A
                          </Avatar>
                        }
                        
                        //  title={this.state.data.author.name}
                      />

                    </Box>

                  </Box>
                </Card>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to="/" ><Button variant="contained" style={{ margin: '1em' }}>Navigateclass</Button></Link>
                </Box>
              </Grid>
            </Grid>

          </Container>
          <Container>

          </Container>


    

      </Box>


      </>
    )
  }
}
export default withRouter(Useparam);