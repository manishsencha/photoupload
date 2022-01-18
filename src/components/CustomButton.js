import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const CustomButton = ({props}) => {
    return (
        <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={Login}
        disabled={loading}>
        <Text style={styles.textPrimary}>Login</Text>
      </TouchableOpacity>
    )
}

export default CustomButton
