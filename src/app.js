import './app.scss';
import { header } from './untils/render/header';
import { errorBoundry } from './untils/render/error-boundry';

document.getElementById('root').append(header())
document.getElementById('root').append(errorBoundry('Place is booked try to use another place'))
