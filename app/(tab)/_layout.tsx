import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name='index'>
        <Icon sf={{ default: "map", selected: "map.fill"}} />
        <Label>Explore</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='notifications'>
        <Icon sf={{ default: "bell", selected: "bell.fill"}} />
        <Label>Notifications</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
