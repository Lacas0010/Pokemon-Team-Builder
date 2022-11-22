import React, {useState, useEffect, useContext, createContext} from "react";
import handleDb from "../../DataBaseConfig";

const DataContext = createContext(null);

export const DataContextProvider = props => {
    const {children} = props;

    const [fetchedData, setFetchedData] = useState([]);

    const BOILERPLATE_DATA = {
        game: "",
        numDex: "",
        name: "",
        attack1: "",
        attack2: "",
        attack3: "",
        attack4: "",
        shiny: "",
        sprite: "",
    }

    const createTeamItems = () => {
        let tempArr = [];

        for (let i = 1; i <= 6; i++) {
            handleDb.create(BOILERPLATE_DATA)
                .then(res => {
                    console.log("Registro criado com sucesso!", res);
                })
                .catch(err => {
                    console.error("Erro ao criar registro...", err);
                })
            
            tempArr.push(BOILERPLATE_DATA);
        }

        setFetchedData(tempArr);
    }

    useEffect(() => {
        handleDb.all()
            .then(res => {
                if (res.length === 0) {
                    return createTeamItems();
                }

                setFetchedData(res);
            })
            .catch(err => {
                console.error("Erro ao buscar dados", err);
            })
    }, [])

    const data = {
        fetchedData
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

const useDataContext = () => useContext(DataContext);

export default useDataContext;
