import { useColorScheme, View, ViewStyle } from 'react-native'
import { Colors } from '@/constants/Colors'

interface ThemedViewProps {
    style?: ViewStyle | ViewStyle[]
    children?: React.ReactNode
}

const ThemedView = ({ style, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )
}

export default ThemedView