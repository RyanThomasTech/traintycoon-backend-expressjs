export const createStationsTable = `
DROP TABLE IF EXISTS stations;
CREATE TABLE IF NOT EXISTS stations (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(200) NOT NULL
  )
`;

export const insertStations= `
INSERT INTO stations(name)
VALUES ('Montgomery Station'),
      ('Roosevelt Jackson Heights')
`;

export const dropStationsTable = 'DROP TABLE stations';
