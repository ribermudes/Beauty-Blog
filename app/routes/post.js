import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  } ,
  actions: {
    saveComment3(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comment').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post);
    }
  }
});
