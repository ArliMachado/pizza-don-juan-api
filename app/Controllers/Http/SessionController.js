'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, response, auth }) {
    const { email, password, origin } = request.all()
    const token = await auth.attempt(email, password)

    const user = await User.query()
      .where('email', email)
      .first()

    if (
      (origin === 'MOBILE' && user.type === 'ADMIN') ||
      (origin === 'BROWSER' && user.type === 'USER')
    ) {
      return response
        .status(401)
        .send({ error: { message: 'Usuário não autorizado' } })
    }
    return token
  }
}

module.exports = SessionController