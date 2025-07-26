import { useState } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { Star, MapPin, Heart } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
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
  const [favorite, setFavorite] = useState(isFavorite);
  const [scale] = useState(new Animated.Value(1));

  const handleToggleFavorite = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    setFavorite(!favorite);
  };

  return (
    <View className="items-center w-full">
      <View className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
        <View className="relative h-48 bg-gray-100 justify-center items-center">
          <Text className="text-gray-400 text-sm">[Imagen]</Text>

          <Text className="absolute bottom-2 left-2 text-xs text-white bg-gray-700 rounded-full px-2 py-0.5 w-fit">
            {category}
          </Text>

          <Pressable onPress={handleToggleFavorite} className="absolute top-2 right-2 p-1 rounded-full bg-white">
            <Animated.View style={{ transform: [{ scale }] }}>
              <Heart size={20} color={favorite ? 'red' : 'gray'} fill={favorite ? 'red' : 'none'} />
            </Animated.View>
          </Pressable>
        </View>

        <View className="px-4 py-3 space-y-1">
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
    </View>
  );
}