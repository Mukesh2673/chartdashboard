import React from "react";
import { Box, Container, Paper } from "@mui/material";

const MainContent = ({ children }) => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      mt: 8,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      boxSizing: "border-box",
      paddingTop: "10px",
    }}
  >
    <Container maxWidth="lg" sx={{ mx: "auto", px: { xs: 1, sm: 2 } }}>
      <Paper
        elevation={3}
        sx={{ minHeight: "70vh", width: "100%", marginTop: "20px" }}
      >
        {children}
      </Paper>
    </Container>
  </Box>
);

export default MainContent;
