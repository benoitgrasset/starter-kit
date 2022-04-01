import React, { useEffect, useState } from 'react'
import './App.css'

type Props = {
    name: string
}

const App: React.FC<Props> = (props) => {
    return <div className="App">{`Welcome ${props.name} !`} </div>
}

export default App
