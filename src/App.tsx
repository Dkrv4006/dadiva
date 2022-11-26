import { Box, Container } from "@mui/material";


import { Layout } from "./components/Layout";
import { GlobalStyle } from "./style/style";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Box>
        <Container maxWidth="xl">
         <Layout/>

       

          {/* <Button variant="contained">
            daniel
          </Button>

          <div className="input-g">
            <input type="text" />
            <label htmlFor="">daniel</label>
          </div> */}
         
      
        </Container>

      </Box>
        

    </>
  );
}

export default App;

// "emmet.includeLanguages":{
//   "javascript":"javascriptreact"
// },
// #0DA1FF
// #0C59E8
// #0016FF
// #340CE8
// #7B0DFF