import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        comment: this.get('comment'),
        visitor: this.get('visitor'),  // coming from parent component
        post: this.get('post'),
      };
  
      console.log("Hi" + params.post.title);
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
    }
  }
});
