import React, { Component } from 'react'
import withRouter from './withRouter'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';


class Addtocart extends Component {

  state = {
    storedata: [],
    totalprice:0,
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('quantity'));
    if (items) {
      this.setState({
        storedata: items
      })

    }
    
  }


  // delete item

  deleteTask = (_id) => {
    console.log("delete", _id);
    const updatedcart=this.state.storedata.filter((item)=>item._id!==_id)
    const newTodos = [...this.state.storedata];
    const deleteindex = newTodos.findIndex((each) => {
      return each._id === _id;
    });
    newTodos.splice(deleteindex, 1);
    this.setState({
      storedata: newTodos,
    });
    localStorage.setItem('quantity',JSON.stringify(updatedcart));


  }



  render() {

    var total = this.state.storedata.reduce((accum,item) => accum + item.price, 0)
    console.log(total,'price')
    console.log(this.state.storedata)
    return (
      <>
        {this.state.storedata.map((item,index) => {
          return (
            <Container key ={index}>
 
              <Box  onClick={()=>this.deleteTask(item._id)}
              sx={{ color:"primary"}}
              
              style={{ border: '1px solid gray', width: '30%', height: '100%', margin: '1em auto',backgroundColor:'gray' }}>
                <Box style={{ textAlign: 'center' }} >
                  <Typography  style={{ margin:'1em',padding:'0.5em'}}>{item.title}</Typography>
                  <Typography  style={{ margin:'1em',padding:'0.5em'}}> {item.price}</Typography>
                  <Typography  style={{ margin:'1em',padding:'0.5em'}}>{item.subtitle}</Typography>
                  <Typography  style={{ margin:'1em',padding:'0.5em'}}> {item.about}</Typography>
                 
                </Box>

              </Box>
            </Container>




          )
        })
        }

        <Box style={{textAlign:'center'}}>
         <Typography style={{textAlign:'center',width:'15%',border:'1px solid gray',margin:'1em auto',padding:'0.5em 1em'}}>$ Total Price &nbsp;{total}  </Typography>
         </Box>

      </>
    )
  }
}


export default withRouter(Addtocart);