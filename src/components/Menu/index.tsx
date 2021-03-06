import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            {/* passando o passHref ele identificará que deve passar o link para o elemento abaixo
            dele, porém, caso o componente filho do link se trate te um functional component, teremos
            outra situação para abordar, será necessário implementar o forwardRef (ver component/Button) */}
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu

// import Link from 'next/link'

// import { useState } from 'react'
// import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
// import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
// import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
// import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

// import Button from 'components/Button'
// import Logo from 'components/Logo'
// import MediaMatch from 'components/MediaMatch'
// import * as S from './styles'

// export type MenuProps = {
//   username?: string
// }

// const Menu = ({ username }: MenuProps) => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <S.Wrapper>
//       <MediaMatch lessThan="medium">
//         <S.IconWrapper onClick={() => setIsOpen(true)}>
//           <MenuIcon aria-label="Open Menu" />
//         </S.IconWrapper>
//       </MediaMatch>

//       <S.LogoWrapper>
//         <Logo hideOnMobile />
//       </S.LogoWrapper>

//       <MediaMatch greaterThan="medium">
//         <S.MenuNav>
//           <S.MenuLink href="#">Home</S.MenuLink>
//           <S.MenuLink href="#">Explore</S.MenuLink>
//         </S.MenuNav>
//       </MediaMatch>

//       <S.MenuGroup>
//         <S.IconWrapper>
//           <SearchIcon aria-label="Search" />
//         </S.IconWrapper>
//         <S.IconWrapper>
//           <ShoppingCartIcon aria-label="Open Shopping Cart" />
//         </S.IconWrapper>
//         {!username && (
//           <MediaMatch greaterThan="medium">
//             <Link href="/sign-in" passHref>
//               <Button as="a">Sign in</Button>
//             </Link>
//           </MediaMatch>
//         )}
//       </S.MenuGroup>

//       <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
//         <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
//         <S.MenuNav>
//           <S.MenuLink href="#">Home</S.MenuLink>
//           <S.MenuLink href="#">Explore</S.MenuLink>

//           {!!username && (
//             <>
//               <S.MenuLink href="#">My account</S.MenuLink>
//               <S.MenuLink href="#">Wishlist</S.MenuLink>
//             </>
//           )}
//         </S.MenuNav>

//         {!username && (
//           <S.RegisterBox>
//             <Link href="/sign-in" passHref>
//               <Button fullWidth size="large" as="a">
//                 Log in now
//               </Button>
//             </Link>
//             <span>or</span>
//             <Link href="/sign-up" passHref>
//               <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
//             </Link>
//           </S.RegisterBox>
//         )}
//       </S.MenuFull>
//     </S.Wrapper>
//   )
// }

// export default Menu
