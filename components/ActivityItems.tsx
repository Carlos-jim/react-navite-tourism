import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ActivityItemProps {
  iconName: string;
  iconBgClass: string;
  title: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ iconName, iconBgClass, title, time }) => {
  return (
    <View className="flex-row items-center p-4 mb-3 bg-white rounded-xl shadow-sm">
      <View className={`p-3 rounded-full mr-4 ${iconBgClass}`}>
        <Icon name={iconName} size={24} color="#fff" />
      </View>
      <View>
        <Text className="text-base font-medium text-zinc-800">{title}</Text>
        <Text className="mt-1 text-sm text-gray-500">{time}</Text>
      </View>
    </View>
  );
};

export default ActivityItem;