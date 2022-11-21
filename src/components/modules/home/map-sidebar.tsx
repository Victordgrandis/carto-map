import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import {
  setAirports,
  setRetailStores,
  setusaSociodemographics,
} from '../../../store/appSlice';
import { RootState } from '../../../store/store';
import { LayerInputs } from './layer-inputs';

interface MapSidebarProps {}

export const MapSidebar: React.FC<MapSidebarProps> = () => {
  const airportsLayerState = useSelector(
    (state: RootState) => state.app.airports,
  );
  const retailsStoresLayerState = useSelector(
    (state: RootState) => state.app.retailStores,
  );
  const usaSociodemographicsLayerState = useSelector(
    (state: RootState) => state.app.usaSociodemographics,
  );

  return (
    <Box
      sx={{
        marginTop: '60px',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      {airportsLayerState && (
        <LayerInputs
          title="Airports Layer"
          store={airportsLayerState}
          dispatchFn={setAirports}
        />
      )}
      {retailsStoresLayerState && (
        <LayerInputs
          title="Retail Stores Layer"
          store={retailsStoresLayerState}
          dispatchFn={setRetailStores}
        />
      )}
      {usaSociodemographicsLayerState && (
        <LayerInputs
          title="Sociodemographics Usa Blockup Layer"
          store={usaSociodemographicsLayerState}
          dispatchFn={setusaSociodemographics}
        />
      )}
    </Box>
  );
};
