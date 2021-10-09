import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface IconProps {
  family?: string;
}
export const Icon: React.FC<IconProps> = (props) => {
  switch (props.family) {
    case 'material': {
      return <MaterialIcons name={'adjust'} {...props} />;
    }
    default:
      return <MaterialIcons name={'16mp'} {...props} />;
  }
};
