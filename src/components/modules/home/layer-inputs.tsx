import { Grid, TextField, Typography } from '@mui/material';
import { Box, rgbToHex } from '@mui/system';
import { useDispatch } from 'react-redux';
import { hexToRgbArray } from '../../../utils/colors';

interface LayerInputsProps {
  title: string;
  store: any;
  dispatchFn: any;
}

export const LayerInputs: React.FC<LayerInputsProps> = ({
  title,
  store,
  dispatchFn,
}) => {
  const dispatch = useDispatch();
  const handleChangeStyle = (style: string, newVal: any) => {
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
