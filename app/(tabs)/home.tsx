import { Text, TextInput } from 'react-native';
import TouristCard from '@/components/cards';
import CategoryTabs from '@/components/TapsFilter';
import * as Animatable from 'react-native-animatable';

const AnimView = Animatable.View as React.ComponentType<any>;

export default function HomeScreen() {
  const handleDetails = () => {
    console.log('Ver detalles...');
  };

  return (
    <AnimView animation="fadeIn" duration={400} delay={50} className="gap-2 p-7 mt-5">
      <AnimView animation="fadeInDown" duration={600} className="gap-4">
        <Text className="text-[26px] font-bold mb-2 mt-4">Descubre nuevos lugares</Text>
        <TextInput
          placeholder="Buscar sitios turísticos"
          className="h-14 border border-gray-400 px-2 rounded-xl"
        />
        <CategoryTabs
          categories={[
            'Histórico',
            'Naturaleza',
            'Cultural',
            'Aventura',
            'Moderno',
            'Religioso',
          ]}
          onSelect={(cat) => console.log('Seleccionaste:', cat)}
        />
      </AnimView>

      <AnimView animation="slideInUp" duration={800} delay={200} className="mt-4">
        <TouristCard
          title="Parque Arví"
          category="Natural"
          location="Santa Elena, Medellín"
          description="Un parque ecoturístico con senderos, bosques y actividades al aire libre para toda la familia."
          rating={4.7}
          distance="8.2 km"
          duration="30 min"
          onPress={handleDetails}
        />
      </AnimView>
    </AnimView>
  );
}
