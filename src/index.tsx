import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
//add by chao 2025.10.01 性能优化
// 修改后的动态加载
const App = React.lazy(() => import('./App'));
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('性能调优 a0.0.1：' + new Date().toLocaleString() +' '+ performance.now() )
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
