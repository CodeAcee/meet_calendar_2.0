import { header, newEvent, table} from './index';
import { tableData } from '../../services/services';
export const render = () => {
    const app = document.getElementById('root');
    app.append(header());
    app.append(table(tableData));
    app.append(newEvent());
}
