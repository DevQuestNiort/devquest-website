import { IsLoadable } from '../commons/IsLoadable.ts';
import { useEffect } from 'react';

export default function useInitContext(controller: IsLoadable) {
  useEffect(() => {
    controller.onLoad();
  }, [controller]);
}
