import { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

interface CategoryTabsProps {
  categories: string[];
  onSelect: (category: string) => void;
  initialCategory?: string;
}

export default function CategoryTabs({
  categories,
  onSelect,
  initialCategory = 'Todos',
}: CategoryTabsProps) {
  const [selected, setSelected] = useState(initialCategory);

  const handlePress = (category: string) => {
    setSelected(category);
    onSelect(category);
  };

  return (
    <View className="py-2">
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => {
          const isActive = item === selected;
          return (
            <Pressable
              onPress={() => handlePress(item)}
              className={`px-5 py-2 mr-3 rounded-xl border ${
                isActive ? 'bg-primary border-primary' : 'border-gray-300'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  isActive ? 'text-white' : 'text-black'
                }`}
              >
                {item}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
