class GeolocationService {
  static getCurrentPosition() {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos.coords);
          },
          (err) => {
            reject(err);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default GeolocationService;
