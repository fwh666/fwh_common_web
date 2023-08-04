import { HashRouter, useRoutes } from 'react-router-dom';
import routes from './config';

const RoutesPro = ()=> useRoutes(routes);

const HashRouterPro = () => {
    return (
        <HashRouter>
            <RoutesPro/>
        </HashRouter>
    )
}

export default HashRouterPro;