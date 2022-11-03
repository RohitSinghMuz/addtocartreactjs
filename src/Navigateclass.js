import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import {Link } from "react-router-dom"
                                                                                                                                                                                                                                                                                    
// start backdrop
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import withRouter from './withRouter';



class Navigateclass extends Component {
  state = {
    data: [],
  pageno:1,
  numberofpage:0,
  open:false,
  quantity:[],
  counter:0,
  }


  // START LOADER

   handleClose = () => {
    this.setState({
      open:false
    })
    
  };
 

  name="rohit"
  componentDidMount() {

    const items = JSON.parse(localStorage.getItem('quantity'));
    if (items) {
      this.setState({
        quantity: items,
        counter: items.length
      })

    }


this.getData()
  }


  getData = () => {
   this.setState({
    open:true,
   })
    try {
     
fetch(`https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${this.state.pageno}&limit=12`)
    .then(response => response.json())
    .then(result => {

      this.setState({
        data: result.products,
         numberofpage:result.numberOfPages

      })
      this.setState({
        open:false,
       })
      console.log(result)
    })
  }catch(error){
    console.log('error')
  }

  
}

//  local storage
storedata=(item)=>{
 
  const newArry = [...this.state.quantity,item];

    this.setState({
      quantity: newArry,
      counter:this.state.counter+1,
      
      
    });

localStorage.setItem('quantity',JSON.stringify(newArry));


}



  render() {
    console.log(this.state.quantity,'quantity');
    console.log(this.state.counter)
    return (
      <>
      <Container>
      <Link to="/addtocart"> <Box style={{textAlign:'right'}}>
 <Typography>{this.state.counter}</Typography>

 <img   src="https://img.icons8.com/sf-regular/48/000000/shopping-cart.png" alt='hhfgh'/>

     </Box>
     </Link> 

      </Container>



      <Container>
  
        <Grid container spacing={2} style={{ margin: '1em 0em' }}>
          {
            this.state.data?.map((item, index) => {
       
              const date = new Date(item.date)
              return (
                <Grid item lg={3} md={4} sm={6} xs={12}  key={index}>
                  <Card  sx={{Width:'100%', }} style={{ textAlign: 'center', gap: '1em', height: '100%',
                  boxShadow: '10px 10px 5px lightblue gray  red',border:'1px solid gray',
                  
                  
                  }}>

                    <Box style={{ height:'100%',display: 'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  
                      <CardActionArea style={{ height:'100%'}}>

                        <img src={item.images ? item.images : 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'} alt='img' style={{ "width": '100%' }} 
                         onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/screen-shot-2017-11-16-at-3.50.20-pm-1.png";
                        }}
 
                       
                        />
                       
                        <Box  style={{bottom:'0px'}}>
                    
                      <Typography>  Data: {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}</Typography>
                      <Typography>Time :
                      {date.getHours()}/{date.getMinutes()}/{date.getSeconds()}
                      </Typography>
                      </Box>
                      
                         <CardContent style={{height:'100%'}}>
                          <Typography variant="body2" color="text.secondary">
                            {item.about}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.subtitle}
                          </Typography>
                         
                          
                        </CardContent>
                      
                      </CardActionArea>
                      <Box>
                      {/* <Button onClick={() => this.props.navigate('/page', {state: item})} 
                          variant="contained"  style={{margin:'1em'}} >
                             useStatelocation</Button> */}

                             <Button onClick={() => this.props.navigate(`/page/${this.state.pageno}/${item._id}`)} 
                          variant="contained"  style={{margin:'1em'}} >
                             UseParam</Button>


                             <Button onClick={() => this.storedata(item)}
                          variant="contained"  style={{margin:'1em'}} >
                             Add To CART</Button>

                          <Typography>$ {item.price}</Typography>


                      </Box>
                      <Box style={{bottom:'0px',left:'0px',right:'0px'}}>
                      <CardHeader   style={{ display:'flex',flexDirection:'row',justifyItems:'space-between'}} 
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            A
                          </Avatar>
                        }
                        title={item.author.name}
                      />
                      </Box>
                    </Box>
                  </Card>
                </Grid>


              )
            })

          }

        </Grid>
       
        </Container>
  
           <Box  style={{display:'flex',justifyContent:'center', width: '100%' }}>
          <Pagination   count={this.state.numberofpage} pageno={this.state.pageno} shape='rounded' 
           color="primary"  size="large"
          onChange={(e,value)=> this.setState({pageno:value},  this.getData) }/>
      </Box>
      {/* onChange={(e,value)=> this.setState({pageno:value}, () => this.getData()) }/> */}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={this.state.open}
        onClick={this.handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
       

      </>
    )
  }
}

export default withRouter(Navigateclass)
