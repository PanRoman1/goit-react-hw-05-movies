import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={< />} />
        <Route path="/about" element={< />} />
        <Route path="/products" element={< />} />
      </Routes>
    </Layout>
  );
};
