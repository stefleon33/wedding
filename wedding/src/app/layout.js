import Navbar from '../components/Navbar';
import '../globals.css';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}