import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface IconProps {
  family?: string;
  name: string;
}
export const Icon: React.FC<IconProps> = (props) => {
  switch (props.family) {
    case 'material': {
      return <MaterialIcons name={'adjust'} />;
    }
    default:
      return <MaterialIcons name={'16mp'} />;
  }
};
