module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('2019-09-now-im-sixty-four', function() {
    return `
    <div class="webmentions">
      <h3 class="ctr">Comments</h3>
      <p class="legal ctr">
        (Imported from previous comments host, <a href="https://talkyard.io">Talkyard</a>.)
      </p>
    
      <p class="commentOpen"><strong>Cap Pike</strong> <em>2019-09-07</em></p>
      <p class="commentBody">People that use Word that don't &quot;get&quot; styles and formatting in general are generally just annoying. Like people who drive that don't bother with turn signals.<br />
        ...and then there's Excel...</p>
    </div>
    `
  })
}