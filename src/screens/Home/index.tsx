import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <TextInput
        placeholder="Nome do participante" 
        placeholderTextColor="#6b6b6b"
        style={styles.input} 
      />

      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}
