import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {mainStyle} from './StylePage.js';

const AboutScreen = () => {
    return(
        <SafeAreaView style={mainStyle.container}>
            <Text>Name: Benjamin Jenkyn</Text>
            <Text>Student ID: 101184985</Text>
        </SafeAreaView>
    );
};

export {AboutScreen};