import { api } from 'boot/axios';

export async function getCurrentGeolocation({ commit }, { latitude, longitude }) {
  const { data } = await api.post('/get-weather', { latitude, longitude });

  commit('setCurrentCity', { currentCity: data.city });
  commit('setPrevision', { prevision: data.prevision });
}
