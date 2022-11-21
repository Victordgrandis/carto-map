import { Grid, Stack, TextField, Typography } from '@mui/material';
import { Box, hexToRgb, rgbToHex } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAirports,
  setRetailStores,
  setUsaBlockgroup,
} from '../../../store/appSlice';
import { RootState } from '../../../store/store';
import { hexToRgbArray } from '../../../utils/colors';

interface MapStyleSidebarProps {}

export const MapStyleSidebar: React.FC<MapStyleSidebarProps> = () => {
  const airportsLayerState = useSelector(
    (state: RootState) => state.app.airports,
  );
  const retailsStoresLayerState = useSelector(
    (state: RootState) => state.app.retailStores,
  );
  const usaBlockgroupLayerState = useSelector(
    (state: RootState) => state.app.usaBlockgroup,
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
      {usaBlockgroupLayerState && (
        <LayerInputs
          title="Sociodemographics Usa Blockup Layer"
          store={usaBlockgroupLayerState}
          dispatchFn={setUsaBlockgroup}
        />
      )}
    </Box>
  );
};

interface LayerInputsProps {
  title: string;
  store: any;
  dispatchFn: any;
}

const LayerInputs: React.FC<LayerInputsProps> = ({
  title,
  store,
  dispatchFn,
}) => {
  const dispatch = useDispatch();
  const handleChangeStyle = (style: string, newVal: any) => {
    console.log(title, newVal);
    dispatch(dispatchFn({ ...store, [style]: newVal }));
  };

  return (
    <Box
      sx={{
        marginTop: '40px',
        paddingLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Outline size"
            variant="standard"
            type="number"
            value={store.lineWidthMinPixels}
            onChange={(e) =>
              handleChangeStyle('lineWidthMinPixels', e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Radius"
            variant="standard"
            type="number"
            value={store.pointRadiusMinPixels}
            onChange={(e) =>
              handleChangeStyle('pointRadiusMinPixels', e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Fill Color"
            variant="standard"
            type="color"
            fullWidth
            value={rgbToHex(
              `rgb(${store.getFillColor[0]}, ${store.getFillColor[1]}, ${store.getFillColor[2]})`,
            )}
            onChange={(e) =>
              handleChangeStyle('getFillColor', hexToRgbArray(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Line Color"
            variant="standard"
            type="color"
            fullWidth
            value={rgbToHex(
              `rgb(${store.getLineColor[0]}, ${store.getLineColor[1]}, ${store.getLineColor[2]})`,
            )}
            onChange={(e) =>
              handleChangeStyle('getLineColor', hexToRgbArray(e.target.value))
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
