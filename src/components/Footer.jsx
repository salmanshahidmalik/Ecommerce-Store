```jsx
function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ShopZone */}
          <nav>
            <h6 className="mb-4 text-lg font-bold text-white">
              ShopZone
            </h6>

            <p className="mb-4 max-w-xs text-sm text-neutral-content/70">
              Your trusted online marketplace for quality products,
              great prices, and reliable service.
            </p>

            <a className="mb-2 block text-sm hover:text-primary">
              About ShopZone
            </a>

            <a className="mb-2 block text-sm hover:text-primary">
              Careers
            </a>

            <a className="block text-sm hover:text-primary">
              Contact Us
            </a>
          </nav>

          {/* Customer Service */}
          <nav>
            <h6 className="mb-4 text-lg font-bold text-white">
              Customer Service
            </h6>

            <a className="mb-2 block text-sm hover:text-primary">
              Help Center
            </a>

            <a className="mb-2 block text-sm hover:text-primary">
              Shipping Information
            </a>

            <a className="mb-2 block text-sm hover:text-primary">
              Returns & Refunds
            </a>

            <a className="block text-sm hover:text-primary">
              Order Tracking
            </a>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="mb-4 text-lg font-bold text-white">
              Legal
            </h6>

            <a className="mb-2 block text-sm hover:text-primary">
              Privacy Policy
            </a>

            <a className="mb-2 block text-sm hover:text-primary">
              Terms & Conditions
            </a>

            <a className="block text-sm hover:text-primary">
              Cookie Policy
            </a>
          </nav>

          {/* Connect */}
          <nav>
            <h6 className="mb-4 text-lg font-bold text-white">
              Connect With Us
            </h6>

            <div className="flex flex-col gap-2">
              <a className="text-sm hover:text-primary">
                Facebook
              </a>

              <a className="text-sm hover:text-primary">
                Instagram
              </a>

              <a className="text-sm hover:text-primary">
                X / Twitter
              </a>

              <a className="text-sm hover:text-primary">
                LinkedIn
              </a>
            </div>
          </nav>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-neutral-content/20"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-neutral-content/60 md:flex-row">

          <p>
            © 2026 ShopZone. All rights reserved.
          </p>

          <p>
            Made with ❤️ for a better shopping experience.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
```
