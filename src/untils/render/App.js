import { header, errorBoundry, newEvent, table, modal} from './index';

export const render = () => {
    const app = document.getElementById('root');
    app.append(header())
    app.append(table())
    app.append(newEvent())
    app.append(errorBoundry())
    app.append(modal())
}
