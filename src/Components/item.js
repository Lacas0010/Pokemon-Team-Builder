import React, {useEffect, useState, useRef} from "react";
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
import {useBaseUrl} from "../hooks/useBaseUrl";
import handleDb from "../../src/DataBaseConfig.js";

const Item = (props) => {
    const {item} = props;
    const {save, value0, deleta, setDeleta, setSave} = item;

    const [name, setName] = useState("");
    const [dex, setDex] = useState("");

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [attack, setAttack] = useState([]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);

    const [open4, setOpen4] = useState(false);
    const [value4, setValue4] = useState(null);

    const [response, setResponse] = useState({
        data: {
            name: "",
        },
    });

    const [shiny, setShiny] = useState(false);

    const hasRunDataCheck = useRef(false);

    const fetchResults = () => {
        const attackList = [];

        axios.get(`${useBaseUrl()}/pokemon/${dex}`)
            .then((res) => {
                const {name} = res.data;

                setName(() => {
                    try {
                        return name.replace(/-/g, " ").charAt(0).toUpperCase() + name.slice(1);
                    } catch {
                        return name;
                    }
                });

                res.data.moves.forEach((attack, index) => {
                    attackList.push({
                        label: attack.move.name,
                        value: index,
                    });
                });

                setAttack(attackList);
                setResponse(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const CondSprite = () => {
        return shiny === true ? (
            <ImageBackground
                source={require("../assets/pokeball.png")}
                style={{height: 200, width: 200, flex: 1}}
            >
                {response.data.sprites && (
                    <Image
                        style={{height: 200, width: 200}}
                        source={{
                            uri: response.data.sprites.front_shiny,
                        }}
                    ></Image>
                )}
            </ImageBackground>
        ) : (
            <ImageBackground
                source={require("../assets/pokeball.png")}
                style={{height: 200, width: 200, flex: 1}}
            >
                {response.data.sprites && (
                    <Image
                        style={{height: 200, width: 200}}
                        source={{
                            uri: response.data.sprites.front_default,
                        }}
                    ></Image>
                )}
            </ImageBackground>
        );
    };

    const fetchAll = () => {
        handleDb.all()
            .then(res => {
                console.log("kkkkkk", res)
            })
            .catch(err => {
                console.log("Error while fetching data", err);
            })
    }

    const getItem = async (src = 'default') => {
        let hasData = false;

        await handleDb.find(item.item.item.id)
            .then(() => {})
            .catch(err => {
                if (src !== "default" && err.includes('Obj not found')) {
                    return createNew();
                }

                hasData = true;
            })

        return hasData;
    }

    const createNew = () => {
        handleDb.create(obj)
            .then(res => {
                console.log("Registro criado com sucesso! ", res);
            })
    }

    const updateItem = (id, obj) => {
        handleDb.update(id, obj)
            .then(res => console.log("Res: ", res))
            .catch(err => console.error("Error: ", err));
    }

    const removeAll = () => {
        handleDb.remove()
            .then(() => {
                console.log("Deletado com sucesso!");
            })
            .catch(err => {
                console.error(err);
            });
    }

    const obj = {
        sprite: "text",
        game: value0 || "texto",
        numDex: dex,
        name: name,
        attack1: value1,
        attack2: value2,
        attack3: value3,
        attack4: value4,
        // sprite:
        //   !!response.data.sprites && !shiny
        //     ? response.data.sprites.front_default
        //     : response.data.sprites.front_shiny,
        shiny: shiny,
    };

    useEffect(() => {
        console.log("Debugger", props, save, deleta);

        if (save) {
            updateItem(item.item.item.id, obj);
            setSave(false);
        }

        if (deleta) {
            removeAll();
            setDeleta(false);
        }
    }, [save, deleta])

    const [temp, setTemp] = useState([]);

    useEffect(() => {
        if (!hasRunDataCheck.current) {
            console.log("parece que n tá rodando uai");

            getItem('checkAll')
                .then(res => {
                    setTemp(prevState => [...prevState, res]);
                })
                .catch(err => {
                    console.log("ué bicho", err);
                })

            hasRunDataCheck.current = true;
        }

        console.log('temp', temp)
    }, [])

    return (
        <View style={styles.PkmContainer}>
            <View style={{display: "flex", flex: 1}}>
                <Text style={{color: "white"}}> {item.title}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Número da Dex"
                    placeholderTextColor="#074db5"
                    onChangeText={(value) => {
                        setDex(value);
                    }}
                    onBlur={() => fetchResults()}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="  Nome"
                    placeholderTextColor="#074db5"
                    value={name}
                    onChangeText={(e) => setName(e)}
                ></TextInput>
                <View style={{display: "flex", flex: 1, flexDirection: "row"}}>
                    <View
                        style={{
                            flexDirection: "column",
                            flex: 1,
                        }}
                    >
                        <DropDownPicker
                            style={styles.atk}
                            open={open1}
                            value={value1}
                            items={attack}
                            setOpen={setOpen1}
                            setValue={setValue1}
                            setItems={setAttack}
                            placeholder="Ataque 1"
                            textStyle={{color: "#074db5"}}
                            searchable={true}
                            dropDownContainerStyle={{
                                backgroundColor: "#c4c4c4",
                                width: 95 + "%",
                                alignSelf: "center",
                            }}
                            zIndex={4000}
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                        />
                        <DropDownPicker
                            style={styles.atk}
                            open={open3}
                            value={value3}
                            items={attack}
                            setOpen={setOpen3}
                            setValue={setValue3}
                            setItems={setAttack}
                            placeholder="Ataque 3"
                            textStyle={{color: "#074db5"}}
                            searchable={true}
                            dropDownContainerStyle={{
                                backgroundColor: "#c4c4c4",
                                width: 95 + "%",
                                alignSelf: "center",
                            }}
                            zIndex={3000}
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                        />
                    </View>
                    <View style={{flexDirection: "column", flex: 1}}>
                        <DropDownPicker
                            style={styles.atk}
                            open={open2}
                            value={value2}
                            items={attack}
                            setOpen={setOpen2}
                            setValue={setValue2}
                            setItems={setAttack}
                            placeholder="Ataque 2"
                            textStyle={{color: "#074db5"}}
                            searchable={true}
                            dropDownContainerStyle={{
                                backgroundColor: "#c4c4c4",
                                width: 95 + "%",
                                alignSelf: "center",
                            }}
                            zIndex={4000}
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                        />
                        <DropDownPicker
                            style={styles.atk}
                            open={open4}
                            value={value4}
                            items={attack}
                            setOpen={setOpen4}
                            setValue={setValue4}
                            setItems={setAttack}
                            placeholder="Ataque 4"
                            textStyle={{color: "#074db5"}}
                            searchable={true}
                            dropDownContainerStyle={{
                                backgroundColor: "#c4c4c4",
                                width: 95 + "%",
                                alignSelf: "center",
                            }}
                            zIndex={3000}
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.spriteSt}>
                    <CondSprite/>
                    <TouchableOpacity
                        onPress={() => setShiny((prev) => !prev)}
                        style={styles.shinyBtt}
                    >
                        {shiny ? (
                            <Image
                                source={require("../assets/shinyIconAlt.png")}
                                style={{width: 35, height: 35}}
                            />
                        ) : (
                            <Image
                                source={require("../assets/shinyIcon.png")}
                                style={{width: 35, height: 35}}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Item;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181b1d",
    },
    flatlist: {
        width: 100 + "%",
        paddingHorizontal: 20,
    },
    PkmContainer: {
        borderWidth: 5,
        padding: 3,
        marginTop: 5,
        marginBottom: 3,
        borderRadius: 10,
        width: 100 + "%",
        flexDirection: "row",
        backgroundColor: "#303030",
        flex: 1,
    },
    atk: {
        borderWidth: 1,
        width: 95 + "%",
        height: 50,
        borderRadius: 10,
        marginLeft: 1,
        marginTop: 5,
        backgroundColor: "#c4c4c4",
    },
    input: {
        borderWidth: 1,
        width: 97 + "%",
        height: 40,
        borderRadius: 10,
        marginBottom: 5,
        marginLeft: 5,
        backgroundColor: "#c4c4c4",
        color: "#074db5",
        textAlign: "center",
    },
    txt: {
        color: "lightgray",
        fontSize: 50,
        textAlign: "center",
        marginTop: 30,
    },
    picker: {
        backgroundColor: "#c4c4c4",
        width: 70 + "%",
        height: 5 + "%",
        alignSelf: "center",
        marginTop: 2 + "%",
        marginBottom: 2 + "%",
        color: "white",
        borderRadius: 15,
    },
    imgC: {
        width: 40,
        height: 40,
    },
    imgC2: {
        width: 25,
        height: 45,
    },
    spriteSt: {
        justifyContent: "center",
        flex: 1,
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    shinyBtt: {
        position: "absolute",
        left: 6 + "%",
        borderRadius: 15,
        borderWidth: 1,
        padding: 5,
        backgroundColor: "#c4c4c4",
    },
    btns: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2 + "%",
        marginTop: 2 + "%",
    },
    save: {
        backgroundColor: "#30c255",
        width: 30 + "%",
        borderRadius: 15,
        marginRight: 2 + "%",
    },
    delete: {
        backgroundColor: "#ff3530",
        width: 30 + "%",
        borderRadius: 15,
        marginLeft: 2 + "%",
    },
});
