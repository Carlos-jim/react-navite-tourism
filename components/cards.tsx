import { View, Text, Pressable } from 'react-native';
import { Star, MapPin, Heart } from 'lucide-react-native';
import Button_Component from './ui/button';


interface TouristCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  rating: number;
  distance: string;
  duration: string;
  onPress: () => void;
  isFavorite?: boolean;
}

export default function TouristCard({
  title,
  category,
  location,
  description,
  rating,
  distance,
  duration,
  onPress,
  isFavorite = false,
}: TouristCardProps) {
  return (
    <View className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
      <View className="relative h-36 bg-gray-100 justify-center items-center">
        <Text className="text-gray-400 text-sm">[Imagen]</Text>
        <Pressable className="absolute top-2 right-2 p-1 rounded-full bg-white">
          <Heart size={20} color={isFavorite ? 'red' : 'gray'} fill={isFavorite ? 'red' : 'none'} />
        </Pressable>
      </View>

      <View className="px-4 py-3 space-y-1">
        <Text className="text-xs text-white bg-gray-700 rounded-full px-2 py-0.5 w-fit">{category}</Text>

        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-black flex-1 pr-2">{title}</Text>
          <View className="flex-row items-center">
            <Star size={16} color="gold" />
            <Text className="text-sm text-black ml-1">{rating.toFixed(1)}</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPin size={16} color="gray" />
          <Text className="text-sm text-gray-600">{location}</Text>
        </View>

        <Text className="text-sm text-gray-700" numberOfLines={2}>{description}</Text>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-xs text-gray-500">{distance} • {duration}</Text>
          <Button_Component onPress={onPress} text="Ver detalles"></Button_Component>
        </View>
      </View>
    </View>
  );
}