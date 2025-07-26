import { Text, View,ScrollView } from "react-native";
import TouristCard from "@/components/cards";

export default function HomeScreen() {
  const handleDetails = () => {
    console.log('Ver detalles...');
  };
  return (
    <ScrollView className="gap-2 p-7 mt-5">
      <View className="gap-1">
        <Text className="text-[26px] font-bold mb-2 mt-4">Mis Favoritos</Text>
        <Text className="text-[15px] text-gray-500">... sitios guardados</Text>
      </View>
      <View className="mt-4">
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
    </ScrollView>
  );
}
