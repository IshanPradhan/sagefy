Backbone = require('backbone')
mixins = require('../modules/mixins')
$ = require('jquery')

class UserModel extends Backbone.Model
    urlRoot: '/api/users/'

    fields: {
        username: {
            title: 'Username'
            type: 'text'
            placeholder: 'e.g. Marissa'
            validations: {
                required: true
            }
        }
        email: {
            title: 'Email'
            type: 'email'
            placeholder: 'e.g. marissa@example.com'
            description: 'We ask for your email to send notifications.'
            validations: {
                required: true
                email: true
            }
        }
        password: {
            title: 'Password'
            type: 'password'
            description: 'Minimum 8 characters.'
            validations: {
                required: true
                minlength: 8
            }
        }
    }

    validate: mixins.validateModelFromFields
    parseAjaxError: mixins.parseAjaxError

    parse: (response) ->
        return response.user

    login: (data) ->
        $.post(@urlRoot + 'login', data)
            .done(=>
                @trigger('login')
            )
            .fail((error) =>
                @trigger('loginError', @parseAjaxError(error))
            )

    logout: ->
        $.post(@urlRoot + 'logout')
            .done(=>
                @trigger('logout')
            )

    getPasswordToken: (data) ->
        $.post(@urlRoot + 'request_password_token', data)
            .done(=>
                @trigger('passwordToken')
            )
            .fail((error) =>
                @trigger('errorPasswordToken', @parseAjaxError(error))
            )

module.exports = UserModel
