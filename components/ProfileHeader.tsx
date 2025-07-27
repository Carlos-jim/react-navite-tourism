import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

interface User {
    name: string;
    title: string;
    level: string;
}

const ProfileHeader = ({ user }: { user: User }) => {
  return (
    <LinearGradient
      colors={['#40E0D0', '#008B8B']} 
      className="rounded-b-2xl"
    >
      <View className="items-center px-4 pt-12 pb-5">
        <View className="items-center justify-center w-24 h-24 mb-3 bg-white/30 rounded-full border-2 border-white">
          <Icon name="user" size={50} color="#fff" />
        </View>
        <Text className="text-2xl font-bold text-white">{user.name}</Text>
        <Text className="mt-1 text-base text-gray-200">{user.title}</Text>
        <View className="px-4 py-2 mt-3 bg-white rounded-full">
          <Text className="font-bold text-secondary">Nivel: {user.level}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileHeader;