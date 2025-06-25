import { Colors } from "@/constants/Colors";
import {
  Appearance,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();

  const scheme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(scheme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container style={styles.container}>
      <FlatList data={[]} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </Container>
  );
}

function createStyles(scheme, colorScheme) {
  return StyleSheet.create({});
}
