// src/components/FeaturedSiteCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FeaturedSiteCard = ({ site }) => {
  if (!site) return null; // No renderizar nada si no hay un sitio seleccionado

  return (
    <View className="bg-white rounded-2xl p-4 mx-4 my-5 shadow-lg">
      <View className="flex-row items-center">
        {/* Placeholder para la imagen */}
        <View className="w-20 h-20 bg-gray-200 rounded-lg mr-4"></View>
        
        <View className="flex-1">
          <Text className="text-lg font-bold text-zinc-800">{site.name}</Text>
          <View className="flex-row items-center mt-1">
            <Icon name="star" size={16} color="#FFD700" />
            <Text className="ml-1 text-sm text-gray-600">{site.rating}</Text>
          </View>
          <View className="flex-row items-center mt-1">
            <Icon name="map-marker" size={16} color="gray" />
            <Text className="ml-1 text-sm text-gray-600">{site.location}</Text>
          </View>
        </View>
      </View>

      <View className="flex-row mt-4">
        <TouchableOpacity className="bg-primary flex-1 py-3 rounded-xl flex-row justify-center items-center mr-2">
          <Icon name="send" size={16} color="white" />
          <Text className="text-white font-bold ml-2">Cómo llegar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-gray-300 flex-1 py-3 rounded-xl justify-center items-center ml-2">
          <Text className="text-zinc-800 font-bold">Ver Detalles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedSiteCard;