import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { isRouteErrorResponse } from 'react-router-dom'

export function SSRRender(url: string | Partial<Location>) {
    return ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    )
}