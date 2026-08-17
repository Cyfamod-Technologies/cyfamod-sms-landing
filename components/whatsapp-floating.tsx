import Link from 'next/link'

interface WhatsAppFloatingProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppFloating({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348000000000',
  message = 'Hello Cyfamod SMS, I would like to learn more about the platform.',
}: WhatsAppFloatingProps) {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '')
  const encodedMsg = encodeURIComponent(message)
  const href = `https://wa.me/${cleanPhone}?text=${encodedMsg}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Chat with Cyfamod SMS on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.04C9.36 7.04 9.09 7.11 8.87 7.35C8.64 7.6 8 8.2 8 9.42C8 10.64 8.89 11.82 9.01 12C9.14 12.16 10.74 14.65 13.24 15.72C15.32 16.61 15.74 16.44 16.19 16.4C16.64 16.35 17.65 15.8 17.86 15.21C18.07 14.63 18.07 14.13 18.01 14.03C17.95 13.92 17.79 13.86 17.53 13.73C17.28 13.6 16.05 13 15.82 12.91C15.6 12.83 15.43 12.79 15.27 13.04C15.1 13.28 14.62 13.86 14.47 14.03C14.32 14.2 14.18 14.22 13.92 14.1C13.67 13.97 12.84 13.7 11.86 12.83C11.1 12.15 10.59 11.31 10.44 11.06C10.3 10.81 10.42 10.67 10.55 10.54C10.66 10.43 10.8 10.25 10.93 10.1C11.06 9.94 11.1 9.83 11.19 9.66C11.27 9.5 11.23 9.35 11.17 9.22C11.1 9.1 10.62 7.93 10.42 7.45C10.22 6.96 10.02 7.04 9.87 7.04C9.72 7.04 9.53 7.04 9.53 7.04Z" />
      </svg>
    </Link>
  )
}
