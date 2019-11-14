let detcity = '广州'
try {
  if (localStorage.city) {
    detcity = localStorage.city
  }
} catch (e) { }

export default {
  city: detcity
}
