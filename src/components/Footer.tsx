import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {


  return (
    <footer className="shadow-2xl rounded-3xl m-4 py-10 px-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Mi Sitio Web
            <p className="text-sm">Calle 123, Ciudad, País</p>
        </div>
        
        <div className="space-x-6 flex">
            <a href="#" className=" hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className=" hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
      <p className="text-center text-sm">&copy; 2024 Fusions</p>
    </footer>
  )
}
