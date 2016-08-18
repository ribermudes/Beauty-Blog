import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  visitor: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
