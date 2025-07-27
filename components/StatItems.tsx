import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StatItemProps {
  iconName: string;
  count: number | string;
  label: string;
  color?: string; // Opcional, si quieres personalizar el color del icono
}

const StatItem: React.FC<StatItemProps> = ({ iconName, count, label, color }) => {
  return (
    <View className="items-center justify-center w-1/2 p-2">
      <Icon name={iconName} size={28} color="#40E0D0" />
      <Text className="mt-1 text-2xl font-bold text-zinc-800">{count}</Text>
      <Text className="mt-0.5 text-sm text-gray-500">{label}</Text>
    </View>
  );
};

export default StatItem;