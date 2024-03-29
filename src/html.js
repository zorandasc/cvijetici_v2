import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* PINTEREST  */}
        <meta
          name="p:domain_verify"
          content="5dfec0d2e21f6834fc7ea6747003a61b"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/*FOR COOKIE HUB 
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var cpm = {};
                      (function(h,u,b){
                      var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
                      e.async=true;e.src='https://cookiehub.net/c2/322177ea.js';
                      e.onload=function(){u.cookiehub.load(b);}
                      d.parentNode.insertBefore(e,d);
                      })(document,window,cpm);`,
          }}
        ></script>
        */}
        {
          <script
            data-ad-client="ca-pub-3724050527592480"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        }
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
