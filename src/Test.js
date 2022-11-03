
import { TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default class Test extends Component {

    state = {
        input: '',
        myarr:[],

    }

    inputvalue = (e) => {
        this.setState({
            input: e.target.value

        })
        e.preventDefault();
    }
    getfactor = () => {
        let arr = [];
        for (let i = 1; i <= this.state.input; i++) {
            if (this.state.input % i == 0) {

                arr.push(i)
            }

        }

        console.log(arr);
        this.setState({
            input: '0',
            myarr:arr,

        })
    }




    render() {

        return (
            <>
                <Container>


                    <Box>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"
                            onChange={(e) => this.inputvalue(e)}

                        />
                        <Button onClick={this.getfactor} >Get Factor</Button>


                    </Box>
                </Container>
               {this.state.myarr.map((array,index)=>{
                    return(
                   
                    <div key={index}>

                    {array}
                    </div>

               
                    )

                })
            } 



            </>
        )
    }
}
