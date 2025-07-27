import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader';
import StatItem from '@/components/StatItems';
import ActivityItem from '@/components/ActivityItems';
import MenuItem from '@/components/MenuIItems';

// Datos de ejemplo
const userData = {
  name: 'Juan Pérez',
  title: 'Explorador de Colombia',
  level: 'Aventurero',
};

const statsData = [
  { id: '1', iconName: 'map-marker', count: 12, label: 'Sitios Visitados' },
  { id: '2', iconName: 'heart', count: 5, label: 'Favoritos' },
  { id: '3', iconName: 'star', count: 8, label: 'Reseñas' },
  { id: '4', iconName: 'camera', count: 24, label: 'Fotos' },
];

const activityData = [
  { id: '1', iconName: 'map-marker', iconBgClass: 'bg-blue-500', title: 'Visitaste Catedral Basílica', time: 'Hace 2 días' },
  { id: '2', iconName: 'star', iconBgClass: 'bg-yellow-500', title: 'Reseñaste Parque Nacional', time: 'Hace 1 semana' },
  { id: '3', iconName: 'heart', iconBgClass: 'bg-red-500', title: 'Agregaste a favoritos Museo de Arte', time: 'Hace 2 semanas' },
];

const menuOptions = [
    { id: '1', iconName: 'cog', text: 'Configuración', onPress: () => alert('Ir a Configuración')},
    { id: '2', iconName: 'help-circle', text: 'Ayuda y Soporte', onPress: () => alert('Ir a Ayuda')},
    { id: '3', iconName: 'logout', text: 'Cerrar Sesión', onPress: () => alert('Cerrando sesión...'), isLogout: true },
];


const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <ProfileHeader user={userData} />
      
      <View className="p-5">
        {/* Sección de Estadísticas */}
        <Text className="mb-4 text-xl font-bold text-zinc-800">Mis Estadísticas</Text>
        <View className="flex-row flex-wrap p-2 mb-5 bg-white rounded-xl">
          {statsData.map(item => (
             <StatItem key={item.id} {...item} />
          ))}
        </View>

        {/* Sección de Actividad Reciente */}
        <Text className="mb-4 text-xl font-bold text-zinc-800">Actividad Reciente</Text>
        {activityData.map(item => (
            <ActivityItem key={item.id} {...item} />
        ))}
        
        {/* Sección de Menú */}
        <View className="mt-5">
            {menuOptions.map(item => (
                <MenuItem key={item.id} {...item} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;