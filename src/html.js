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

        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: "(window.adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-149097573-1"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `var gtagId = 'UA-149097573-1';

              window['ga-disable-' + gtagId] = true;

              window.dataLayer = window.dataLayer || [];

              function gtag(){dataLayer.push(arguments);}

              gtag('js', new Date());
              `,
          }}
        ></script>
        <script src="https://cookiehub.net/cc/683f556d.js"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener("load", function() {

window.cookieconsent.initialise({

	onInitialise: function(status) {

		if (this.hasConsented('required')) {

		}

		if (this.hasConsented('analytics')) {

			window['ga-disable-UA-149097573-1'] = false;

			gtag('config', gtagId);

		}

		if (this.hasConsented('marketing')) {

		}

	},

	onAllow: function(category) {

		if (category == 'required') {

		}

		if (category == 'analytics') {

			window['ga-disable-UA-149097573-1'] = false;

			gtag('config', gtagId);

		}

		if (category == 'marketing') {

		}

	},

	onRevoke: function(category) {

		if (category == 'required') {

		}

		if (category == 'analytics') {

			window['ga-disable-UA-149097573-1'] = true;

		}

		if (category == 'marketing') {

		}

	}

})

});
`,
          }}
        ></script>
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
