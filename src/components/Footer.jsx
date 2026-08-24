function Footer() {
    return (
      <footer className="bg-neutral text-neutral-content p-10">
        {/* ShopZone */}
        <div className="flex flex-row justify-between w-full">
        <nav>
          <h6 className="footer-title">ShopZone</h6>
          <a className="link link-hover">About ShopZone</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
  
        {/* Customer Service */}
        <nav>
          <h6 className="footer-title">Customer Service</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Shipping Information</a>
          <a className="link link-hover">Returns & Refunds</a>
          <a className="link link-hover">Order Tracking</a>
        </nav>
  
        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
  
        {/* Connect */}
        <nav>
          <h6 className="footer-title">Connect</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">X / Twitter</a>
          <a className="link link-hover">LinkedIn</a>
        </nav>
  
        {/* Copyright */}
        <aside className="col-span-full border-t border-neutral-content/20 pt-5 text-center">
          <p>© 2026 ShopZone. All rights reserved.</p>
        </aside>
        </div>
  
      </footer>
    )
  }
  
  export default Footer