import React, { useEffect } from 'react';
import { getToken } from '../../../services/getToken';
import {
  CartoLayer,
  setDefaultCredentials,
  MAP_TYPES,
  API_VERSIONS,
} from '@deck.gl/carto';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import { BASEMAP } from '@deck.gl/carto';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import maplibregl from '!maplibre-gl';
// @ts-ignore
import maplibreglWorker from 'maplibre-gl/dist/maplibre-gl-csp-worker';
// @ts-ignore
maplibregl.workerClass = maplibreglWorker;

export const MapComponent = () => {
  const airportsLayerState = useSelector(
    (state: RootState) => state.app.airports,
  );
  const retailsStoresLayerState = useSelector(
    (state: RootState) => state.app.retailStores,
  );
  const usaBlockgroupLayerState = useSelector(
    (state: RootState) => state.app.usaBlockgroup,
  );
  const INITIAL_VIEW_STATE = {
    longitude: 0,
    latitude: 0,
    zoom: 2,
  };

  useEffect(() => {
    const getData = async () => {
      /* const res = await getToken();
      console.log(res); */
    };
    getData();
  }, []);

  setDefaultCredentials({
    apiVersion: API_VERSIONS.V3,
    accessToken: process.env.REACT_APP_PUBLIC_MAP_TOKEN,
    apiBaseUrl: 'https://gcp-europe-west1.api.carto.com',
  });

  const layerAirport = new CartoLayer({
    id: 'AirportsCartoLayer',
    type: MAP_TYPES.TABLE,
    connection: 'carto_dw',
    data: 'carto-demo-data.demo_tables.airports',
    getLineColor: airportsLayerState
      ? airportsLayerState.getLineColor
      : [0, 0, 0],
    getFillColor: airportsLayerState
      ? airportsLayerState.getFillColor
      : [0, 0, 0],
    pointRadiusMinPixels: airportsLayerState
      ? airportsLayerState.pointRadiusMinPixels
      : 0,
    lineWidthMinPixels: airportsLayerState
      ? airportsLayerState.lineWidthMinPixels
      : 0,
  });

  const layerRetailStores = new CartoLayer({
    id: 'RetailStoresCartoLayer',
    type: MAP_TYPES.TABLE,
    connection: 'carto_dw',
    data: 'carto-demo-data.demo_tables.retail_stores',
    getLineColor: retailsStoresLayerState
      ? retailsStoresLayerState.getLineColor
      : [0, 0, 0],
    getFillColor: retailsStoresLayerState
      ? retailsStoresLayerState.getFillColor
      : [0, 0, 0],
    pointRadiusMinPixels: retailsStoresLayerState
      ? retailsStoresLayerState.pointRadiusMinPixels
      : 0,
    lineWidthMinPixels: retailsStoresLayerState
      ? retailsStoresLayerState.lineWidthMinPixels
      : 0,
  });

  const layerUsaBlockgroup = new CartoLayer({
    id: 'UsaBlockgroupCartoLayer',
    type: MAP_TYPES.TILESET,
    connection: 'carto_dw',
    data: 'carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup',
    getLineColor: usaBlockgroupLayerState
      ? usaBlockgroupLayerState.getLineColor
      : [0, 0, 0],
    getFillColor: usaBlockgroupLayerState
      ? usaBlockgroupLayerState.getFillColor
      : [0, 0, 0],
    pointRadiusMinPixels: usaBlockgroupLayerState
      ? usaBlockgroupLayerState.pointRadiusMinPixels
      : 0,
    lineWidthMinPixels: usaBlockgroupLayerState
      ? usaBlockgroupLayerState.lineWidthMinPixels
      : 0,
  });

  return (
    <Box sx={{}}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[layerUsaBlockgroup, layerAirport, layerRetailStores]}
      >
        <Map
          mapLib={maplibregl}
          reuseMaps
          mapStyle={BASEMAP.VOYAGER}
          styleDiffing={false}
        />
      </DeckGL>
    </Box>
  );
};
