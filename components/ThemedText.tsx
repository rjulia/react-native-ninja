import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { TextProps, TextStyle } from 'react-native'

interface ThemedTextProps extends TextProps {
    style?: TextStyle | TextStyle[]
    title?: boolean
}

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const textColor = title ? theme.title : theme.text

    return (
        <Text 
            style={[{ color: textColor }, style]}
            {...props}
        />
    )
}

export default ThemedText