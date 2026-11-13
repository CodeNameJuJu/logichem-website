import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { countryIds } from '../content/countries';

// 50m dataset: the 110m set omits small countries (Mauritius, Singapore).
const GEO_URL = '/data/countries-50m.json';

export default function CountriesMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 160 }}
      width={800}
      height={420}
      style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="World map highlighting the 34 countries where Logichem Control has delivered projects"
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const active = countryIds.has(Number(geo.id));
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={hovered === geo.rsmKey ? '#2a4373' : active ? '#3b5998' : '#d4d6d8'}
                stroke="#ffffff"
                strokeWidth={0.5}
                onMouseEnter={() => active && setHovered(geo.rsmKey)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
