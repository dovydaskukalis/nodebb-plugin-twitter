(function(module) {
    "use strict";

    var Twitter = {},
        embed = '<blockquote class="content twitter-tweet" lang="en"><a href="https://twitter.com/$1/status/$2"></a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';

    Twitter.parse = function(data, callback) {
        var regularUrl = /<a href="(?:https?:\/\/)?(?:twitter\.com)\/([^\/"\s]*)\/statuse?s?\/([^\/"\s]*)(\/photo\/1|)">.+?<\/a>/g
        var postContent = data && data.postData && data.postData.content;

        if (postContent && postContent.match(regularUrl)) {
            data.postData.content = postContent.replace(regularUrl, embed);
        }

        callback(null, data);
    };

    Twitter.init = {
        global: {
            addNavigation: function(custom_header, callback) {
                        custom_header.navigation.push({
                        class: 'hidden',
                        route: "",
                        text: '<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
                    });

                callback(null, custom_header);
            }
        }
    },

    module.exports = Twitter;
}(module));