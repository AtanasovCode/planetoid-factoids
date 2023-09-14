import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";



import { GlobalStyle } from "./GlobalStyle";

const theme = {
    //Colors
    color: "#fff",
    background: "#070724",

    //Typography
    antonio: 'Antonio',
    spartan: 'League Spartan',
}

//importing routes
import Homepage from './routes/Homepage';
import PlanetFacts from './routes/PlanetFacts';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/planets/:planet",
            element: <PlanetFacts />
        }
    ])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default Router;