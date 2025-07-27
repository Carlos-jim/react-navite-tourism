// src/components/SiteListItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SiteListItem = ({ site, isSelected, onPress }) => {
  // Clases condicionales para el estilo del borde
  const containerClasses = isSelected
    ? "bg-white p-4 rounded-xl mb-3 flex-row justify-between items-center border-2 border-primary"
    : "bg-white p-4 rounded-xl mb-3 flex-row justify-between items-center";

  return (
    <TouchableOpacity onPress={onPress} className={containerClasses}>
      <View>
        <Text className="text-base font-bold text-zinc-800">{site.name}</Text>
        <Text className="text-sm text-gray-500">{site.distance}</Text>
      </View>
      <View className="bg-gray-100 px-3 py-1 rounded-full">
        <Text className="text-xs font-medium text-gray-600">{site.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SiteListItem;