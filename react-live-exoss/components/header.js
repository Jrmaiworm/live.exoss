import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";



export default function Header() {
    
  
  
  return (
      <>
        <Box
          styleSheet={{
            width: "100%",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
           styleSheet={{
            width: "10%",
            marginBottom: "16px",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
          }}
          // src="http://press.exoss.org/wp-content/uploads/2016/12/EXOSS-TRANSPARENTE.png"
          src="https://exoss.imo.net/imo/img/org/exo/logos/exoss.png"
           />
          <Button
            variant="tertiary"
            colorVariant="neutral"
            label="Exoss.org"
            href="http://exoss.org"
          />
  
          <Button
            variant="tertiary"
            colorVariant="neutral"
            label="Viu um meteoro?"
            href="https://exoss.imo.net/members/imo/report_intro"
          />
  
          <Button
            variant="tertiary"
            colorVariant="neutral"
            label="Area Associados"
            href="/home"
          />
  
          <Button
            variant="tertiary"
            colorVariant="neutral"
            label="CAMS"
            href="/"
          />
          <Button
            variant="tertiary"
            colorVariant="neutral"
            label="Logout"
            href="/"
          />
        </Box>
      </>
    );
  }