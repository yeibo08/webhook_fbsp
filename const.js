'use strict';

// Wit.ai parameters
const WIT_TOKEN = 'EAAChxwhHEXUBANs7dpazBS5vUfXMLiglTJ0GNcXQ32kUHeQFx1bd6jwhUD6dQq7dYeJLQGtfxMzBVqgRoaYwRRT3zmgKhc5jeEaR2TQhidxnTOGH8A3ZClXFos9NMONMQBiIgRKcb2yiN4HNy1A8miQhjAiJzgZArF5ZC4mmK1dtzAgjIOBADxfY6rjV6YZD';
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = 'EAAChxwhHEXUBANs7dpazBS5vUfXMLiglTJ0GNcXQ32kUHeQFx1bd6jwhUD6dQq7dYeJLQGtfxMzBVqgRoaYwRRT3zmgKhc5jeEaR2TQhidxnTOGH8A3ZClXFos9NMONMQBiIgRKcb2yiN4HNy1A8miQhjAiJzgZArF5ZC4mmK1dtzAgjIOBADxfY6rjV6YZD';

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};