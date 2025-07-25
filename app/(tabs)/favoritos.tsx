import { Text, View, TextInput } from "react-native";
import TouristCard from "@/components/cards";

export default function HomeScreen() {
  const handleDetails = () => {
    console.log('Ver detalles...');
  };
  return (
    <View className="gap-2 p-7 mt-5">
      <View className="gap-6">
        <Text className="text-[26px] font-bold mb-2 mt-4">Descubre nuevos lugares</Text>
        <TextInput
          placeholder="Buscar sitios turísticos"
          className="h-14 border border-gray-400 px-2 rounded-xl"
        />
      </View>
      <View className="mt-4">
        <Text className="text-[20px] font-bold mb-2">Tarjetas de ejemplo</Text>
        <TouristCard
          title="Parque Arví"
          category="Natural"
          location="Santa Elena, Medellín"
          description="Un parque ecoturístico con senderos, bosques y actividades al aire libre para toda la familia."
          rating={4.7}
          distance="8.2 km"
          duration="30 min"
          onPress={handleDetails}
        />
      </View>
    </View>
  );
}
