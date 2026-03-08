export function PaymentMethods() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#4E3629] rounded-2xl px-6 py-4 md:px-10 md:py-5 flex flex-col sm:flex-row items-center gap-4 shadow-xl">
        {/* Text */}
        <span className="font-['Montserrat',sans-serif] text-[#F4B441] text-sm md:text-base tracking-wide text-center sm:text-left whitespace-nowrap">
          ACEPTAMOS PAGO CON TARJETA Y TRANSFERENCIAS
        </span>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-[#F4B441]/30" />

        {/* Icons */}
        <div className="flex items-center gap-3">
          {/* Visa */}
          <svg
            viewBox="0 0 48 32"
            className="h-8 w-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="32" rx="4" fill="#FFFFFF" />
            <path
              d="M19.5 21H17L18.7 11H21.2L19.5 21ZM15.3 11L12.9 18.1L12.6 16.7L12.6 16.7L11.8 12C11.8 12 11.7 11 10.4 11H6.1L6 11.2C6 11.2 7.5 11.5 9.2 12.5L11.4 21H14L18 11H15.3ZM36.5 21H38.8L36.8 11H34.8C33.7 11 33.4 11.8 33.4 11.8L29.7 21H32.3L32.8 19.5H36L36.5 21ZM33.5 17.5L34.9 13.6L35.7 17.5H33.5ZM29.5 13.3L29.9 11.2C29.9 11.2 28.6 10.7 27.3 10.7C25.8 10.7 22.3 11.4 22.3 14.5C22.3 17.4 26.3 17.4 26.3 19C26.3 20.5 22.7 20.2 21.5 19.2L21.1 21.4C21.1 21.4 22.4 22 24.3 22C26.2 22 29.5 20.8 29.5 18C29.5 15.1 25.4 14.8 25.4 13.5C25.4 12.2 28.2 12.4 29.5 13.3Z"
              fill="#1A1F71"
            />
          </svg>

          {/* Mastercard */}
          <svg
            viewBox="0 0 48 32"
            className="h-8 w-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="32" rx="4" fill="#FFFFFF" />
            <circle cx="19" cy="16" r="9" fill="#EB001B" />
            <circle cx="29" cy="16" r="9" fill="#F79E1B" />
            <path
              d="M24 9.2C25.8 10.7 27 12.7 27 16C27 19.3 25.8 21.3 24 22.8C22.2 21.3 21 19.3 21 16C21 12.7 22.2 10.7 24 9.2Z"
              fill="#FF5F00"
            />
          </svg>

          {/* Mercado Pago */}
          <svg
            viewBox="0 0 48 32"
            className="h-8 w-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="32" rx="4" fill="#00B1EA" />
            <path
              d="M24 7C17.4 7 12 11.5 12 17C12 19.2 12.9 21.2 14.4 22.8C14.4 22.8 14 24.5 12.5 26C14.5 25.8 16.5 25 17.8 24C19.7 24.7 21.8 25 24 25C30.6 25 36 20.5 36 15C36 11 30.6 7 24 7Z"
              fill="#FFFFFF"
            />
            <text
              x="24"
              y="18"
              textAnchor="middle"
              fill="#00B1EA"
              fontSize="7"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              MP
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
