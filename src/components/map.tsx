import React, { useEffect } from 'react';
import { getToken } from '../services/getToken';
import {
  CartoLayer,
  setDefaultCredentials,
  MAP_TYPES,
  API_VERSIONS,
} from '@deck.gl/carto';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import { VOYAGER } from '@carto/react-basemaps';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import maplibregl from '!maplibre-gl';
// @ts-ignore
import maplibreglWorker from 'maplibre-gl/dist/maplibre-gl-csp-worker';
// @ts-ignore
maplibregl.workerClass = maplibreglWorker;

export const MapComponent = () => {
  const INITIAL_VIEW_STATE = {
    longitude: 0,
    latitude: 0,
    zoom: 2,
  };

  useEffect(() => {
    const getData = async () => {
      const token = getToken();
    };
    //getData();
  }, []);

  setDefaultCredentials({
    accessToken:
      'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfNzRlM3Fic3QiLCJqdGkiOiIyZTBiNTQzZCJ9.VrQtuTF1uzpm62Eu6_COK5Qbme82RLk56WM3bavp6x0',
    apiBaseUrl: 'https://gcp-europe-west1.api.carto.com',
  });
  const layer = new CartoLayer({
    type: MAP_TYPES.QUERY,
    data: [
      'carto-demo-data.demo_tables.airports',
      'carto-demo-data.demo_tables.retail_stores',
      'carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup',
    ],
    pointRadiusMinPixels: 6,
    getLineColor: [0, 0, 0, 0.75],
    getFillColor: [238, 77, 90],
    lineWidthMinPixels: 1,
  });

  return (
    <div>
      <DeckGL controller={true} layers={[layer]}>
        <Map
          mapLib={maplibregl}
          reuseMaps
          mapStyle={VOYAGER}
          styleDiffing={false}
        />
      </DeckGL>
    </div>
  );
};
