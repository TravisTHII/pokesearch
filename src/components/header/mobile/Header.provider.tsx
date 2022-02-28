import { MobileProvider } from '../../../context/mobile'
import { Header } from './Header'

export const HeaderWithMobileProvider = () => (
  <MobileProvider>
    <Header />
  </MobileProvider>
)
