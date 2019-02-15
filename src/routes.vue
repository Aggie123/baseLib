import Home from './vue/container/Home';
import About from './vue/container/About';

const NotFound = { template: '<p>Page not found</p>' }L

const routes = {
  '/': Home,
  '/about': About
}

export default routes