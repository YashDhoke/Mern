import { Typography } from "@mui/material";
import Button from "@mui/material/Button"

function Appbar() {
  return <div style = {{display : "flex" , justifyContent : "space-between" , padding : 4}}>
            <div>
                <Typography> Coursera </Typography>
            </div>
        
        <div style = {{display : "flex" , justifyContent : "center"}}>
            <div style = {{marginRight : 10}}>
                <Button variant={"contained"}
                onClick={() => {window.location = "/signin"}}
                >Sign In</Button>
            </div>

            <div>
                <Button variant={"contained"}
                onClick={() => {window.location = "/signup"}}>SignUp</Button>
            </div>
              
        </div>
  </div>
}

export default Appbar ;