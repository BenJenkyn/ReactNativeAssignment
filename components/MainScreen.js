import React, {useState} from 'react';
import {Switch, Text, SafeAreaView, TextInput, Button} from 'react-native';


import {mainStyle} from './StylePage.js';

const MainScreen = ({navigation}) => {
    //Logic for the switch
    const [isEnabled, setIsEnabled] = useState('false');
    const toggleSwitch = () => setIsEnabled(prevState => !prevState);

    //Logic for the input
    const [size, setSize] = useState();
    const [flooring_price, setFlooring_price] = useState();
    const [installation_cost, setInstallation_cost] = useState();

    //Logic for the output
    const flooring = size * flooring_price;
    const installation = size * installation_cost;
    const total_cost = flooring + installation;
    const tax = total_cost * 0.13;

    //Determining the unit of measurement
    let unit = "Square";
    if(isEnabled === false){
        unit += " Foot";
    }else{
        unit += " Meter"
    }

    return (
        <SafeAreaView style={mainStyle.container}>
            <Text>Select the unit you would like to use (Red = Feet, Blue = Meters):</Text>
            <Switch
                trackColor={{ false: "#FF0000", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#81b0ff" : "#FF0000"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text>Room Size in {unit}:</Text>
            <TextInput
                style={mainStyle.textBox}
                placeholer= 'E.g. 200'
                onChangeText={(val) => setSize(val)}/>

            <Text>Flooring Price Per {unit}:</Text>
            <TextInput
                style={mainStyle.textBox}
                placeholer= 'E.g. 200'
                onChangeText={(val) => setFlooring_price(val)}/>

            <Text>Installation Cost Per {unit}:</Text>
            <TextInput
                style={mainStyle.textBox}
                placeholer= 'E.g. 200'
                onChangeText={(val) => setInstallation_cost(val)}/>

            <Text>The cost of installation before tax is: {installation}</Text>
            <Text>The cost of flooring before tax is: {flooring}</Text>
            <Text>The total cost before tax is: {total_cost}</Text>
            <Text>The tax will be: {tax}</Text>
            <Button
              title="About"
              onPress={() =>{
              navigation.navigate('About Screen');
          }}/>
        </SafeAreaView>
    );
};

export {MainScreen};
