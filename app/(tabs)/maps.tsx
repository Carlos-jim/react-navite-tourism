import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FeaturedSiteCard from '@/components/FeaturedSiteCards';
import SiteListItem from '@/components/SiteListItem';

// --- Datos de Sitios Turísticos de Nueva Esparta ---
const sitesData = [
  { id: '1', name: 'Basílica Menor de Nuestra Señora del Valle', distance: 'Desde Porlamar: 11 km', category: 'Religioso', rating: 4.9, location: 'El Valle del Espíritu Santo', coords: { latitude: 10.9803, longitude: -63.8845 } },
  { id: '2', name: 'Castillo San Carlos de Borromeo', distance: 'Desde Porlamar: 6 km', category: 'Histórico', rating: 4.7, location: 'Pampatar', coords: { latitude: 11.0264, longitude: -63.8011 } },
  { id: '3', name: 'Parque Nacional Laguna de La Restinga', distance: 'Desde Porlamar: 35 km', category: 'Naturaleza', rating: 4.8, location: 'Península de Macanao', coords: { latitude: 11.0550, longitude: -64.1500 } },
  { id: '4', name: 'Playa El Agua', distance: 'Desde Porlamar: 25 km', category: 'Naturaleza', rating: 4.6, location: 'Norte de la Isla', coords: { latitude: 11.1508, longitude: -63.8504 } },
  { id: '5', name: 'Fortín de La Galera', distance: 'Desde Porlamar: 20 km', category: 'Histórico', rating: 4.5, location: 'Juan Griego', coords: { latitude: 11.0875, longitude: -63.9631 } },
  { id: '6', name: 'Parque Nacional Cerro El Copey', distance: 'Desde La Asunción: 5 km', category: 'Naturaleza', rating: 4.7, location: 'Centro de la Isla', coords: { latitude: 11.0186, longitude: -63.9213 } },
  { id: '7', name: 'Playa Parguito', distance: 'Desde Porlamar: 24 km', category: 'Naturaleza', rating: 4.8, location: 'Norte de la Isla', coords: { latitude: 11.1340, longitude: -63.8340 } },
];

const MapScreen = () => {
  const [selectedSite, setSelectedSite] = useState<typeof sitesData[0] | null>(sitesData[0]);
  const initialRegion = {
    latitude: 11.03,
    longitude: -63.90,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4, 
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <Text className="text-2xl font-bold text-zinc-800 pt-12 pb-4 px-4">Mapa de Nueva Esparta</Text>
      
      <View className="h-64 mx-4 rounded-2xl overflow-hidden">
        <MapView 
          style={{ flex: 1 }} 
          initialRegion={initialRegion}
          onPress={() => setSelectedSite(null)} 
        >
          {sitesData.map(site => (
            <Marker 
              key={site.id} 
              coordinate={site.coords} 
              title={site.name}
              description={site.location}
              pinColor={selectedSite?.id === site.id ? '#40E0D0' : '#FF6347'} // Turquesa para seleccionado, Tomate para los demás
              onPress={() => setSelectedSite(site)}
            />
          ))}
        </MapView>
      </View>
      {selectedSite && <FeaturedSiteCard site={selectedSite} />}
      
      <View className="px-4 pt-4">
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