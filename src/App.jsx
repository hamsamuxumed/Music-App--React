import React from "react";
import { Summary } from "./components/SummaryCard"
import { Album } from "./components/Album";

const App = () => {
    return (
        <>
            <h1>Music App</h1>
            <Summary />
            <Album />

        </>
    )
}

export default App