// import { useState, useEffect } from "react";
import Gif from "../gif/Gif";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./style.css";

const theme = createTheme({
  typography: {
    fontSize: 7,
    // fontWeightBold: true,
    fontFamily: ["Roboto"].join(",")
  }
});

const Search = ({ keyword, handleInput, handleSubmit, gif }) => {
  // const classes = theme();
  return (
    <div className="search">
      <ThemeProvider theme={theme}>
        <Typography variant="h1">You are searching : {keyword}</Typography>
      </ThemeProvider>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" onChange={handleInput}></input>
        <button type="submit">Cari</button>
        <br></br>
        <div className="container">
          {gif.map((item) => (
            <Gif
              key={item.id}
              url={item.images.original.url}
              title={item.title}
              description={item.rating}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

// class Search extends Component{
//    state = {
//        keyword: "mario bros",
//        gif: []

//    }

//    handleInput = e => this.setState({keyword: e.target.value});

//    getData = async () =>{
//         try{
//             const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
//             params: {
//                 api_key:'t39AvTM3pGK3gCyx3kQUbZotBt9vSCn2',
//                 q:this.state.keyword,
//                 limit: 12
//             }
//             });
//             // console.log(response.data);
//             console.log(response.data.data)
//             this.setState({gif: response.data.data})
//         }
//         catch(e){
//             console.error(e);
//         }
//    }

//    render(){
//        const {keyword, gif} = this.state;
//        return(
//            <div className="search">
//                <h1>{keyword}</h1>
//                <input type="text" id="input" onChange={this.handleInput}></input>
//                <button onClick={this.getData}>Cari</button>
//                <br></br>
//                {

//                    gif.map(item=>(
//                        <Gif
//                         key={item.id}
//                         url= {item.images.original.url}
//                         title={item.title}
//                         description={item.rating}
//                        />
//                    ))
//                }
//            </div>

//        )
//    }
// }

export default Search;
