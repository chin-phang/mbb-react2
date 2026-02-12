import { useState } from 'react'
import { APIProvider, ControlPosition, Map } from '@vis.gl/react-google-maps';
import AutocompleteControl from "./AutocompleteControl.tsx";
import AutocompleteResult from "./AutocompleteResult.tsx";
import { useDispatch } from 'react-redux';
import { addSelectedPlace } from './autocompleteSlice';
import './App.css'

// @ts-ignore
const API_KEY: string = (globalThis.GOOGLE_MAPS_API_KEY ??
    process.env.GOOGLE_MAPS_API_KEY) as string;

export type AutocompleteMode = { id: string; label: string };

const App = () => {

  const dispatch = useDispatch();
  const [selectedPlace, setSelectedPlace] =
      useState<google.maps.places.Place | null>(null);

  const incompatibleVersionLoaded = Boolean(
      globalThis &&
      globalThis.google?.maps?.version &&
      !(
          globalThis.google?.maps?.version.endsWith('-alpha') ||
          globalThis.google?.maps?.version.endsWith('-beta')
      )
  );

  if (incompatibleVersionLoaded) {
    location.reload();
    return;
  }

  const handlePlaceSelect = (place: google.maps.places.Place | null) => {
    setSelectedPlace(place);
    if (place) {
      dispatch(addSelectedPlace(place));
    }
  };

  return (
      <>
        <APIProvider apiKey={API_KEY}>
          <Map
              style={{width: '100vw', height: '100vh'}}
              mapId={'bf51a910020fa25a'}
              defaultCenter={{lat: 3.1390, lng: 101.6869}}
              defaultZoom={3}
              gestureHandling='greedy'
              disableDefaultUI>
            <AutocompleteControl
                controlPosition={ControlPosition.TOP_LEFT}
                onPlaceSelect={handlePlaceSelect}
            />

            <AutocompleteResult place={selectedPlace}/>
          </Map>
        </APIProvider>
      </>
  )
}

export default App
