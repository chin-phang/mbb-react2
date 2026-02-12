import { useSelector } from 'react-redux';
import type { RootState } from './store';

export const ControlPanel = () => {
  const selectedPlaces = useSelector((state: RootState) => state.autocomplete.selectedPlaces);

  return (
      <div className="control-panel">
        <h3>Recently Selected Places</h3>

        {selectedPlaces.length > 0 && (
          <>
            {selectedPlaces.map((place: any, index: number) => {
              return (
                  <p key={index}>{place.displayName}</p>
              );
            })}
          </>
        )}
      </div>
  );
}
