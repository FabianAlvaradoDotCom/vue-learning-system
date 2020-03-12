import HomePage from './pages/HomePage.vue';
import QuestionsPoolPage from './pages/QuestionsPoolPage.vue';
import CreateQuestionPage from './pages/CreateQuestionPage.vue';
//import MonitoringSelectorPage from './pages/MonitoringSelectorPage.vue';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/questions-pool', component: QuestionsPoolPage },
  { path: '/create-question', component: CreateQuestionPage },
  //{ path: '/monitoring-selector', component: MonitoringSelectorPage }
]