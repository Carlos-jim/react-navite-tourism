// src/screens/MapScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FeaturedSiteCard from '@/components/FeaturedSiteCards';
import SiteListItem from '@/components/SiteListItem';

// --- Datos de Ejemplo ---
const sitesData = [
  { id: '1', name: 'Catedral Basílica Metropolitana', distance: '2.5 km', category: 'Religioso', rating: 4.8, location: 'Centro Histórico, Medellín', coords: { latitude: 6.2518, longitude: -75.5636 } },
  { id: '2', name: 'Parque Nacional Natural', distance: '45 km', category: 'Naturaleza', rating: 4.9, location: 'Antioquia', coords: { latitude: 6.5400, longitude: -76.0500 } },
  { id: '3', name: 'Museo de Arte Moderno', distance: '8.2 km', category: 'Cultural', rating: 4.7, location: 'Ciudad del Río, Medellín', coords: { latitude: 6.2267, longitude: -75.5748 } },
  { id: '4', name: 'Fortaleza San Felipe', distance: '1.8 km', category: 'Histórico', rating: 4.6, location: 'Cerro Nutibara, Medellín', coords: { latitude: 6.2368, longitude: -75.5802 } },
  { id: '5', name: 'Parque de Aventuras', distance: '32 km', category: 'Aventura', rating: 4.5, location: 'Santa Elena, Antioquia', coords: { latitude: 6.2392, longitude: -75.5015 } },
  { id: '6', name: 'Teatro Nacional', distance: '5.1 km', category: 'Cultural', rating: 4.8, location: 'La Candelaria, Medellín', coords: { latitude: 6.2483, longitude: -75.5684 } },
];

const MapScreen = () => {
  const [selectedSite, setSelectedSite] = useState(sitesData[0]);

  const initialRegion = {
    latitude: 6.2442,
    longitude: -75.5812,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <Text className="text-2xl font-bold text-zinc-800 pt-12 pb-4 px-4">Mapa de Sitios</Text>
      
      {/* Mapa Interactivo */}
      <View className="h-64 mx-4 rounded-2xl overflow-hidden">
        <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
          {sitesData.map(site => (
            <Marker key={site.id} coordinate={site.coords} pinColor={selectedSite?.id === site.id ? '#40E0D0' : 'red'} />
          ))}
        </MapView>
        <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center pointer-events-none">
            <Text className="text-white font-bold text-lg bg-black/40 p-2 rounded-lg">Mapa Interactivo</Text>
            <Text className="text-white text-xs bg-black/40 p-1 rounded-lg">Integración con Google Maps</Text>
        </View>
      </View>
      
      {/* Tarjeta del Sitio Destacado */}
      <FeaturedSiteCard site={selectedSite} />
      
      {/* Lista de Todos los Sitios */}
      <View className="px-4">
        <Text className="text-xl font-bold text-zinc-800 mb-4">Todos los Sitios</Text>
        {sitesData.map(site => (
          <SiteListItem 
            key={site.id}
            site={site}
            isSelected={selectedSite?.id === site.id}
            onPress={() => setSelectedSite(site)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MapScreen;