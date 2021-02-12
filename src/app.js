import './app.scss';
import { header } from './untils/render/header';
import { errorBoundry } from './untils/render/error-boundry';
import { modal } from './untils/render/modal';
import { newEvent } from './untils/render/new-event';
import { table } from './untils/render/table';
import { events } from './modules/events';

document.getElementById('root').append(header())
document.getElementById('root').append(errorBoundry('Place is booked try to use another place'))
document.getElementById('root').append(modal())
document.getElementById('root').append(newEvent())
document.getElementById('root').append(table())
