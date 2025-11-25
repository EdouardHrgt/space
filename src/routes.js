import HomeView from './views/HomeView.vue'
import DestinationView from './views/DestinationView.vue'
import TechnologyView from './views/TechnologyView.vue'
import CrewView from './views/CrewView.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/destination', component: DestinationView },
  { path: '/crew', component: CrewView },
  { path: '/technology', component: TechnologyView }
]
