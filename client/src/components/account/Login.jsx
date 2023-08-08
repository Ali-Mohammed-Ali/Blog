import { Box } from "@mui/material"

const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    return (
        <Box>
            <img src={imageURL} alt="Login" />
        </Box>
    )
}

export default Login;