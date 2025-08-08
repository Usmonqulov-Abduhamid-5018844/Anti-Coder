import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Layout = lazy(() => import("./layout/Layout"));
const ProductDetail = lazy(() => import("./product/ProductDetail"));


const Kompany = lazy(()=> import("./header-pages/collaction/Kompany"))
const Dostafka = lazy(() => import("./header-pages/collaction/Dostafka"));
const Vazvrad = lazy(() => import("./header-pages/collaction/vazvrad"));
const Garanty = lazy(() => import("./header-pages/collaction/garanty"));
const Kontakt = lazy(() => import("./header-pages/collaction/kontakt"));
const Blok = lazy(() => import("./header-pages/collaction/blok"));

const Izbrinnoy = lazy(() => import("./header-pages/izbrinny/izbrinnoy"));
const Korzinki = lazy(() => import("./header-pages/izbrinny/korzinki"));
const Sravneny = lazy(() => import("./header-pages/izbrinny/sravneny"));

const Lampa = lazy(() => import("./header-pages/pages/lampa"));
const Lustra = lazy(() => import("./header-pages/pages/lustra"));
const MobilnyUstanofka = lazy(() => import("./header-pages/pages/mobilny-ustanofka"));
const NastolnyLampa = lazy(() => import("./header-pages/pages/nastolny-lampa"));
const Nochniky = lazy(() => import("./header-pages/pages/nochniky"));
const Podsvedki = lazy(() => import("./header-pages/pages/podsvedki"));
const UlichnyOslujitel = lazy(() => import("./header-pages/pages/ulichny-oslujitel"));
const Zvatilny = lazy(() => import("./header-pages/pages/zvatilny"));



const Not_Fount = lazy(()=> import("./not-fount"))

const MainRouters = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            {path: "/", element: <Home/>},
            { path: "product/:id", element: <ProductDetail /> },


            {path: "kompany", element:<Kompany/> },
            {path: "dastafka", element:<Dostafka/> },
            {path: "vazvrad", element:<Vazvrad/> },
            {path: "garanty", element:<Garanty/> },
            {path: "kontakt", element:<Kontakt/> },
            {path: "blog", element:<Blok/> },


            {path: "izbriny", element:<Izbrinnoy/> },
            {path: "korzinki", element:<Korzinki/> },
            {path: "sravneny", element:<Sravneny/> },

            {path: "lampa", element: <Lampa/>},
            {path: "lustra", element: <Lustra/>},
            {path: "mobilny", element: <MobilnyUstanofka/>},
            {path: "nastolny", element: <NastolnyLampa/>},
            {path: "nochnik", element: <Nochniky/>},
            {path: "podsvetka", element: <Podsvedki/>},
            {path: "ulichny", element: <UlichnyOslujitel/>},
            {path: "zvatilny", element: <Zvatilny/>},
          ],
        },
        {path: "*", element: <Not_Fount/> }
      ])}
    </Suspense>
  );
};

export default React.memo(MainRouters);
