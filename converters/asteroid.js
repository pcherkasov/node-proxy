function convertToMeteor({ near_earth_objects }) {
  return Object.values(near_earth_objects).flatMap(date => {
    return date.map(({
                       id,
                       name,
                       estimated_diameter: { estimated_diameter_min },
                       is_potentially_hazardous_asteroid,
                       close_approach_data,
                     }) => {
      return {
        id,
        name,
        diameter: estimated_diameter_min,
        is_potentially_hazardous_asteroid,
        close_approach_date_full: close_approach_data[0].close_approach_date_full,
        relative_velocity: close_approach_data[0].relative_velocity.kilometers_per_second,
      }
    });
  });
}

module.exports = convertToMeteor;
