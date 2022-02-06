import appConfig  from "../config.json"
import { Box, Button, Text, TextField, Image  } from "@skynexui/components"
import React, {useState} from "react";
import { useRouter } from "next/router"

import  Header  from "../components/header";



function Title(props){
    console.log(props);
    const Tag = props.tag || "h1";
    return(
        <>
      
        <Tag>{props.children}</Tag>
        <style jsx>{`
       ${Tag} {
          color: ${appConfig.theme.colors.neutrals['999']};
        }
      `}</style>
      </>
    )
}




export default function PaginaInicial() {
    const [username , setUsername ]= useState('');
    const roteamento = useRouter();
    return (
        <>
            
            <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
        backgroundImage: `url(https://storage.googleapis.com/production-hostgator-brasil-v1-0-8/058/830058/2aXnw63K/c76167d8499e49d78fe5f66c94396bc4)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
          overflow: 'auto'
        }}
      >
     
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
            overflow: 'auto'
          }}
        >
        <Header />
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              overflow: 'auto'
            }}
          >
          
          </Box>
          <>

          </>

        </Box>
      </Box>
    </Box>
        </>
    );
}