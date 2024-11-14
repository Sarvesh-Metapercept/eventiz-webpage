import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/reusables/Header';
import Home from './components/home/Home';
import Footer from './components/reusables/Footer';
import ProductList from './components/shop/product-list/ProductList';
import HomeTitle from './components/home/HomeTitle';
import PlistTitle from './components/shop/product-list/PlistTitle';
import ShopHeader from './components/shop/ShopHeader';
// import PDetail from './components/shop/product-detail/PDetail';
import PCart from './components/shop/product-cart/PCart';
import PCheckout from './components/shop/product-checkout/PCheckout';
import PDetailTitle from './components/shop/product-detail/PDetailTitle';
import PCartTitle from './components/shop/product-cart/PCartTitle';
import PCheckoutTitle from './components/shop/product-checkout/PCheckoutTitle';
// import PDetail from './components/shop/product-detail/pdetail';
import Create from './components/CRUD/Create';
import ViewAll from './components/CRUD/ViewAll';
import Read from './components/CRUD/Read';
import Update from './components/CRUD/Update';
import PDetail from './components/shop/product-detail/PDetail';


function App() {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header>
                <HomeTitle />
              </Header>
              <Home />
            </>
          }
        />

        <Route path="/product-list" element={
          <>
            <ShopHeader>
              <PlistTitle />
            </ShopHeader>
            <ProductList />
          </>
        }
        />

        <Route path="/product-detail" element={
          <>
            <ShopHeader>
              <PDetailTitle />
            </ShopHeader>
            <PDetail />
          </>
        }
        />

        <Route path="/product-cart" element={
          <>
            <ShopHeader>
              <PCartTitle />
            </ShopHeader>
            <PCart />
          </>
        }
        />

        <Route path="/product-checkout" element={
          <>
            <ShopHeader>
              <PCheckoutTitle />
            </ShopHeader>
            <PCheckout />
          </>
        }
        />
{/* ****************************************************************** */}
{/* ****************************************************************** */}

        <Route path="/view-all" element={
          <>
            <ShopHeader>
              <PCheckoutTitle />
            </ShopHeader>
            <ViewAll />
          </>
        }
        />

        <Route path="/create" element={
          <>
            <ShopHeader>
              <PCheckoutTitle />
            </ShopHeader>
            <Create />
          </>
        }
        />

        <Route path="/read" element={
          <>
            <ShopHeader>
              <PCheckoutTitle />
            </ShopHeader>
            <Read />
          </>
        }
        />

        <Route path="/update" element={
          <>
            <ShopHeader>
              <PCheckoutTitle />
            </ShopHeader>
            <Update />
          </>
        }
        />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
