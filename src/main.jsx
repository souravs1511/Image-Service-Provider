import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Components/Store/Index'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


// eslint-disable-next-line react-refresh/only-export-components
// const Roots=createBrowserRouter([
//   {
//     path:'/',
//     element:<Both/>,
//     children:[
//       {
//         path:'/Home',
//         element:<Home/>,
//       },
//       {
//         path:'/NewUser',
//         element:<NewUser/>,
//       },
//       {
//         path:'/LogIn',
//         element:<LOG/>
//       },
//       {
//          path:'/UserPage/:id/',
//          element:<User/>
//       }
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
