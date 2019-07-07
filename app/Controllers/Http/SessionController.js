'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, response, auth }) {
    // try {
    const { email, password, origin } = request.all()
    const token = await auth.attempt(email, password)

    const user = await User.query()
      .where('email', email)
      .first()

    if (
      (origin === 'MOBILE' && user.type === 'ADMIN') ||
      (origin === 'BROWSER' && user.type === 'USER')
    ) {
      return response.status(401).send([{ message: 'Usuário não autorizado' }])
    } else {
      return { user, token }
    }
  }
}

module.exports = SessionController
