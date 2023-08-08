import { useState } from "react";
import { Box, TextField,Button, styled, Typography } from "@mui/material";
// ***********************************************************start styling
const Component = styled(Box)`
width: 400px;
margin: auto;
`;
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
});
const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > button, & > p  {
    margin-top: 20px
}
`;

const LoginButton = styled(Button)`
text-transform: none;
`;
const SignupButton = styled(Button)`
text-transform: none;
`
// ***********************************************************End styling

const Login = () => {
    
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';


    // handling login and signup appearance in the page 
    const [account, ToggleAccount] = useState('login');
    const toggleSignup = () => {
        account === 'signup' ? ToggleAccount ('login') : ToggleAccount('signup');
    } 
 
    return (
        <Component>
            <Box>
            <Image src={imageURL} alt="Login" />
                { account === 'login' ?
                    <Wrapper>
                        <TextField  variant="standard" label="Enter Username" />
                        <TextField  variant="standard" label="Enter Password" />
                        <LoginButton variant="contained">Login</LoginButton>
                        <Typography style={{textAlign: "center"}}>OR</Typography>
                        <SignupButton onClick={()=> toggleSignup()}>Create An Account</SignupButton>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField  variant="standard" label="Enter Username" />
                        <TextField  variant="standard" label="Enter Email" />
                        <TextField  variant="standard" label="Enter Password" />
                        <SignupButton variant="contained">Signup</SignupButton>
                        <Typography style={{textAlign: "center"}}>OR</Typography>
                        <LoginButton onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper> 
                }
            </Box>
        </Component>
    )
}

export default Login;