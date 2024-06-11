declare module 'react-awesome-slider/dist/autoplay' {
    import { AwesomeSliderProps } from 'react-awesome-slider';
  
    export interface AutoplayProps extends AwesomeSliderProps {
      play?: boolean;
      cancelOnInteraction?: boolean;
      interval?: number;
    }
  
    export default function withAutoplay(Component: React.ComponentType<AwesomeSliderProps>): React.ComponentType<AutoplayProps>;
  }
  