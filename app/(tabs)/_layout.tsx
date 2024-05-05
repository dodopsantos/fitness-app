import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'black'
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarLabel: () => null,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square" color={color} />,
          tabBarLabel: () => null
        }}
      />
      <Tabs.Screen
        name="configuration"
        options={{
          title: 'Configuration',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
}
