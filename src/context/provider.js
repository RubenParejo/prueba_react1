import React, { useState } from 'react';
import TestsContext from './testsContext.js';

const Provider = ({ children }) => {
    const [contextState, setContextState] = useState({
        tests: {
            results: {},
            done: false,
        },
      })

    const context = {
        contextState,
        setContextState,
    };

    return (
        <TestsContext.Provider value = { context }>
            {children}
        </TestsContext.Provider>
    );
}

export default Provider;
