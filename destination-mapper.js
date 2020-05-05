module.exports = (originalDestinations) => {
    var result;
    const MAPPING = JSON.parse(process.env.DESTINATION_MAPPING);
    if (originalDestinations && Array.isArray(originalDestinations)) {
        var mappedDestinations = originalDestinations.map(e => MAPPING[e]).filter(e => e);
        if (mappedDestinations.length > 0) {
            result = mappedDestinations;
        }
    }
    return result;
  };