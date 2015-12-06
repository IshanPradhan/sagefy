{a, i, p} = require('../../modules/tags')

module.exports = (kind, entity_id, follows) ->
    following = follows?.find((f) -> f.entity.id is entity_id)
    return [
        a(
            {
                id: "#{kind}_#{entity_id}"
                href: '#'
                className: 'follow button button--good pull-right'
            }
            i({className: 'fa fa-heart'})
            ' Follow'
        ) if not following
        p(
            {className: 'label--good pull-right'}
            i({className: 'fa fa-check'})
            ' Following'
        ) if following
    ]