// constants/Theme.ts
import { useColorScheme } from 'react-native';
import { Colors } from './Colors';

export function useThemeColors() {
  const scheme = useColorScheme(); // 'light' | 'dark' | null
  return Colors[scheme ?? 'light'];
}
