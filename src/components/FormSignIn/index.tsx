import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

      <Button size="large" fullWidth>
        ENTRAR
      </Button>

      <FormLink>
        Ainda não tem uma conta?
        <Link href="/sign-up">
          <a>Cadastre-se</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
