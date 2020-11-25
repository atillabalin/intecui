import React, { useState, useEffect } from 'react';
import api from './Service';

const DataContext = React.createContext([{}, () => { }]);


const DataProvider = (props) => {

    const [state, setState] = useState()

    useEffect(() => {
        api.courses.get('')
            .then(res => res)
            .then(data => {
                let all = data.data;
                setState(prevState => {
                    return {
                        ...prevState,
                        courses: all
                    }
                })
            })
        api.news.get('')
            .then(res => res)
            .then(data => {
                let all = data.data;
                setState(prevState => {
                    return {
                        ...prevState,
                        news: all
                    }
                })
            })
        api.events.get('')
            .then(res => res)
            .then(data => {
                let all = data.data;
                setState(prevState => {
                    return {
                        ...prevState,
                        events: all
                    }
                })
            })
        api.settings.get('')
            .then(res => res)
            .then(data => {
                let all = data.data;
                setState(prevState => {
                    return {
                        ...prevState,
                        settings: all
                    }
                })
            })
    }, [])
    return (
        <DataContext.Provider value={[state, setState]}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };