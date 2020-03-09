# UI Components

This is my boilerplate setup for writing frontend components. There're other
setups of course, but this works for me. Included: React, babel, webpack,
styled-components, and dotenv. HMR is enabled. Note also that for
styled-component, the recommended babel plugin is also used (among other things,
it provides the `css` props to your React components).

This setup can be used by itself for frontend development, but it can also be
integrated to a backend. I usually have another express server running on
another port providing the api endpoint; I disable CORS and use a proxy module
so that queries from the UI server are first made to a proxy module, and
the proxy module will then make the requests to the API server.
