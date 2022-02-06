import { Box, Text, TextField, Button } from "@skynexui/components";
import React, { useState } from "react";
import appConfig from "../config.json";
import Header from "../components/header";




export default function Home() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async () => {
    console.warn(login, password);
    let result = await fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
      },
    });
    result = await result.text();

    localStorage.setItem("usuario", result);

    console.log(result);
    if (result) {
     
      alert("Bem vindo a Exoss.");
    } else {
     
      alert("Usuario ou senha incorretos");
    }
  };
console.log(login);
  return (
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
          overflow: "auto",
        }}
      >
        <Header />
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
            overflow: "auto",
          }}
        >
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              overflow: "auto",
            }}
          ></Box>
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "100%" },
              textAlign: "center",
              marginBottom: "32px",
              marginTop: "50px",
            }}
          >
            <Text>Area exclusiva para associados</Text>
            <br></br>
            <TextField
              id="user"
              type="text"
              name="user"
              value={login}
              onChange={(e) => {
                setLogin(e.target.value);
              }}
              placeholder="Login"
              styleSheet={{ width: "30%" }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />

            <TextField
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Senha"
              styleSheet={{ width: "30%" }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />

            <Button
              label="Entrar"
              buttonColors={"blue"}
               onClick={ collectData}
              styleSheet={{
                width: "150px",
                height: "30px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
