Controller = require('./base')
$ = require('jquery')
_ = require('underscore')

class PageController extends Controller
    initialize: (options) ->
        @$page = $('.page')
        @$page.empty()

        if options.model
            @model = new options.model(options.modelOptions)

        @view = new options.view(_.extend({
            model: @model || null
            $region: @$page
        }, options.viewOptions))

    close: ->
        if _.isFunction(@view.close)
            @view.close()

        @view.remove()

        super()

module.exports = PageController
