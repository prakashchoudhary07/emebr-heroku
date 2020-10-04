import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

const TWEET_INTNET = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
 @service router;

 get currentUrl(){
  return new URL(this.router.currentUrl, window.location.origin);
 }

 get shareUrl(){
  let url = new URL(TWEET_INTNET);
  url.searchParams.set('url', this.currentUrl);

  if(this.args.text){
   url.searchParams.set('text', this.args.text);
  }

  if(this.args.hashtag){
   url.searchParams.set('hashtag', this.args.hashtag);
  }

  if(this.args.via){
   url.searchParams.set('via', this.args.via);
  }

  return url;

 }
}
