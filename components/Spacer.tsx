
import { View, DimensionValue } from 'react-native'

interface ISpacer {
    width?: DimensionValue,
    height?: DimensionValue,
}

const Spacer = ({ width = "100%", height = 40 }: ISpacer) => {
  return (
    <View style={{ width, height }} />
  )
}

export default Spacer