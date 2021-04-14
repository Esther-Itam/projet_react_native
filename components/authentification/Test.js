import React, { Component } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

export default class Test extends Component {

/*     constructor(props){
        super(props)
        this.state={
            userName:""
        }
    }

    testFetch = () => {
        const {userName}= this.state

        fetch('http://React native/Projet/projetTest/php/index.php', {
            method: 'POST',
            headers: {
                 
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.userName,
            })
    })
    } */

    render() {      
        return (
            <div>
                
                <View styles={styles.ViewStyle}>
                    Welcome Jitou
                </View>
            </div>
        )
    }
}

const styles=StyleSheet.create({

    ViewStyle:
    {
        flex:1,
        padding:20,
        marginTop:10
    },

})
