import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd(name: string) {
    if(participants.includes(name)){
      return Alert.alert("Tente outro participante", `${name} já está na lista de participantes!`)
    }
    setParticipants(prevState => [...prevState, name])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Você deseja remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b" 
          onChangeText={nameText => setParticipantName(nameText)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participantName)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: participant }) => (
          <Participant
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />

   
    </View>
  );
}
