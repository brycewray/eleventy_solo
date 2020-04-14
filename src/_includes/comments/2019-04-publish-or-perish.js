module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('2019-04-publish-or-perish', function() {
    return `
    <div class="webmentions">
      <h3 class="ctr">Comments</h3>
      <p class="legal ctr">
        (Imported from previous comments host, <a href="https://talkyard.io">Talkyard</a>.)
      </p>
      <p class="commentOpen"><strong>Andrew Canion</strong> <em>2019-06-18</em></p>
      <p class="commentBody">Thank you for this tutorial. I'd never used Hugo or Netlify before, but with your guide I was able to create a landing page for <a href="https://www.hannahbeazley.com" rel="nofollow">my wife's domain</a>. Your guide also <a href="https://micro.blog/joshsullivan/4100487" rel="nofollow">helped another user on micro.blog</a>.</p>
    
      <p class="commentOpen"><strong>Bryce Wray</strong> <em>2019-06-18</em></p>
      <p class="commentBody">Very glad I could help. Have fun with Hugo! I certainly do.</p>
    </div>
    `
  })
}