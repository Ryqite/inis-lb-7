import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import { store } from '../store'

// _app.js выполняется для каждой страницы: здесь подключаются глобальные стили,
// хранилище Redux и общий каркас (шапка), который не пересоздаётся при переходах.
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
