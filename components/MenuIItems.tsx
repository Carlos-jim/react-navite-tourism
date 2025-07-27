import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuItem = ({ iconName, text, onPress, isLogout = false }) => {
  const textColor = isLogout ? 'text-red-600' : 'text-zinc-800';
  const iconColor = isLogout ? '#E53935' : 'grey';

  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center py-4">
      <Icon name={iconName} size={24} color={iconColor} />
      <Text className={`ml-5 text-base font-medium ${textColor}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;